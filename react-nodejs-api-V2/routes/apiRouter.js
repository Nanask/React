var express = require("express");
var router = express.Router();

const getlist = {
  b_id: "01",
  b_start_date: 0,
  b_title: "이잉",
  b_end_date: "2021-09-14 00:00:00",
  b_end_check: false,
  b_cancel: false,
};

router.get("/", (req, res) => {
  res.render("index", { title: "라?" });
});

module.exports = router;
