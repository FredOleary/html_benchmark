var express = require('express');
var router = express.Router();
var shell = require('shelljs')
const path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let pth = path.join(__dirname )
  console.log(pth)
  shell.exec(path.join(__dirname, "../../run_benchmark.sh"))
  shell.exec(path.join(__dirname, "../../get_benchmark.sh"))
  res.send({"benchmark":850});
});

module.exports = router;
