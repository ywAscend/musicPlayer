var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//配置加载第三方接口的模块 request
var request = require('request');

//自己定义一个访问数据的路由
router.get("/ma",function(req,res,next){
  var options = {
    url: req.query.urls,
    headers: { //通过设置 Users-agent 来把当前请求模拟成手机客户端请求
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    }
  };
  //request("写请求地址"，回调函数(错误，响应，数据))
  request(options, function (error, response, body) {
    res.send(JSON.parse(body));//通过JSON.parse(body) 把字符串格式的json转成对象形式的json
  });
});

router.get("/mas",function(req,res,next){
  //request("写请求地址"，回调函数(错误，响应，数据))
  request(req.query.urls, function (error, response, body) {
    res.send(JSON.parse(body));//通过JSON.parse(body) 把字符串格式的json转成对象形式的json
  });
});




module.exports = router;
