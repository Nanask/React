var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
/**
 * CROSS ORIGIN RESOURCE SHARE
 * 서로 다른 서버간의 데이터를 주고 받을 때 보안문제로 인해
 * 발생할 수 있는 ISSUE
 *
 * XSS 공격
 */
const cors = require("cors");
const mongoose = require("mongoose");

// DB가 작동되는 것을 모니터링을 하기 위한 evnet핸들러를 등록
const dbConn = mongoose.connection;
dbConn.once("open", () => {
  console.log("MongoDB Open OK!!");
});
dbConn.on("error", () => {
  console.error;
});
// config/mongoConfigSample.json에 Atlas USERID와 PASSWORD를 등록한 후 mongoConfig.json으로
// 변경한 후 실행하시오
const mongoConfig = require("./config/mongoConfig.json");
const mongAtlas = `mongodb+srv://${mongoConfig.USERID}:${mongoConfig.PASSWORD}` + `@cluster0.pavjb.mongodb.net/myFirstDatabase` + `?retryWrites=true&w=majority`;
// mydb데이터베이스를 사용하겠다
mongoose.connect(mongAtlas);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// CORS를 허용할 Origin List
const whiteList = ["http://localhost:5000", "http://localhost:4000"];

// origin에 해당하는 list가 있으면 허용할 List에 넣어주기
const corsOption = {
  orogin: (origin, callback) => {
    const isWhiteList = whiteList.indexOf(origin) !== -1;
    callback(null, isWhiteList);
  },
  credentials: true,
};
// midelware 연결해주기
app.use(cors(corsOption));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
