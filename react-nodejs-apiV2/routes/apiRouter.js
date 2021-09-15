var express = require("express");
var router = express.Router();

// 이코드를 작성하는 순간 컬렉션을 만들 준비가 됨
const BUCKET = require("../models/bucket");
/**
 * RESTful
 * 클라이언트에서 요청을 할 때
 * 할 일을 프로토콜 method로 분리하기
 * CREATE(Insert) : POST로 요청을 하고
 * READ(Select) : GET 요청을 하고
 * UPDATE : PUT으로 요청을 하고
 * DELETE : DELETE로 요청을 하고
 * 이런식으로 해서 클라이언트와 통신이 원활하도록 설정하기
 *
 * 자원의 명확한 지정
 * 		localhost:3000/book/delete?id=12345 보통 요청을 수행하는데
 * 		localhost:3000/book/12345/delete : RESTful에서 할 일(자원)을 명확하게 설정하기
 *
 * RESTful 요청을 처리하기 위해서는
 * 표준 HTML 코드 만으로는 연결이 불가하다.
 * 		표준 HTML에서는 POST와 GET은 지원을 하지만
 * 		PUT과 DELETE는 지원을 하지 않는다.
 * 		PUT과 DELETE를 사용하기 위해서는 Ajax(fetch)와 같은 별도의 도구를 사용해야 한다.
 *
 * React와 API 연동을 할때는 RESTFul 4가지 method를 사용하여 서버를 구축한다.
 *
 * POST, PUT : 데이터를 body에 담아서 전송
 * GET, DELETE : 단순히 URL요청만 수행하거나 pathVarriable 방식으로 데이터를 전송하여 처리를 수행한다
 *
 * Client에서 요청을 할 때
 * 같은 URL을 통하여 요청을 하여도 method가 다르면 서로 다른 역할을 수행할 수 있기 때문에
 * 서버코딩을 하는데 다소 부담이 덜 할 수 있다.
 * 		GET localhost:3000/book/delete를 수행하면
 * 		- 도서정보에서 삭제된 데이터를 나에게 보여달라
 * 		router.get("/book/delete")로 서버를 설정하고
 * 		DELETE localhost:3000/book/delete?id=1 를 수행하면
 * 		- 도서정보에서 어떤 ID값이 1인 데이터를 삭제하라 라고 요청을 할 수 있다.
 * 		router.delete("/book/delete")
 *
 * 		똑같은 url이 중복이 되어 오류가 발생할 수 있기 때문에 get과 delete로 분류해주기?
 */

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "api래" });
});

/**
 * post로 받는 데이터는 주로 form에 담긴 데이터이다.
 * API Server에서는 fetch()를 통하여 데이터를 전달받았을때도 사용한다.
 * request의 body에 담겨서 전달되기 때문에
 * req.body에서 데이터를 추출하면 된다.
 */
router.post("/bucket", async (req, res) => {
  const body = req.body;
  const result = await BUCKET.create(body);
  console.log("데이터 추가하기", result);
  console.log(body);
  res.json({ result: "OK" });
});

router.put("/bucket", async (req, res) => {
  const body = req.body;
  await BUCKET.findOneAndUpdate({ b_id: body.b_id }, body);
  res.json({ result: "OK" });
});
/**
 * 3 Tier (3layer App)
 * react => node => atlas
 * atlas => node =? react
 *
 * node가 중간에서 중재해주는 미들웨어 역할을 해준다.
 *
 * findOnd()이 return 하는 doc가 성능상 문제로
 * null 값이 되어 overwrite()가 비정상작동이 되므로 사용하지 말자
 */
router.put("/bucket/over", async (req, res) => {
  const body = req.body;
  // DB에서 b_id 값이 body.b_id와 같은 데이터를
  const doc = await BUCKET.findOne({ b_id: body.b_id });
  // doc = {...doc, b_id : body.b_id, b_title : body.b_title}
  // select한 model 객체의 모든 요소 데이터를 body로 받은 데이터로 변경하라
  // body로 받은 데이터를 overwrite(클라이언트로부터 받은 데이터 = body에 있는데이터) 하고
  await doc.overwrite(body);
  // 변경된 데이터를 DB update 하라
  await doc.save();

  console.log("데이터 업데이트 하기");
  console.table(body);
});

// router.get("/get", (req, res) => {
//   res.json(list);
//   console.table(list);
// });

router.get("/get", async (req, res) => {
  const buckets = await BUCKET.find({});
  console.log("전체리스트 요청하기");
  res.json(buckets);
});

router.get("/:id/get", (req, res) => {
  console.log("개별 데이터 요청하기");
  res.json(list[0]);
});

router.get("/update/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;
  res.render("index", { title: "update" });
  console.log("update로 수신된 데이터", id, title);
  // 데이터를 보낼 준비를 하고 있으니 응답을 준비해
  // res.status(200).end("끝")

  /**
   * Http Status Code2xx
   * 200번대 : 정상처리가 되고 데이터를 보낼 준비를 하고 있으니 기다려라
   * 300번대 : 조금저에 보내준 결과와 변함이 없으니 그대로 써라, redirect
   * 400번대 : 보낸 요청에 문제가 있다.
   * 	404 : Not found
   * 	401, 403 : 권한이 없다.
   * 	405 : method가 잘못되었다. (nodejs에서는 보내지 않는 코드 )
   * 	400 : 보낸 데이터가 문제가 있다. (nodejs에서는 보내지 않는 코드 )
   * 500번대 : Server Internal Error
   */
  res.send("끝");
  res.json({ title: "끝" });
});
router.put("/update", (req, res) => {});
router.delete("/cancel/:id", (req, res) => {
  const id = req.params.id;
  res.render("index", { title: "cancel" });
  console.log(id);
});

module.exports = router;
