/**
 * Created by tosun on 15/9/23.
 */
var express = require('express');
var wechat = require('wechat');
var config = require('../../config/config');
var router = express.Router();

module.exports = function(app){
  app.use('/', router);
};

router.use('/wx', wechat(config.wechat, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  if (message.FromUserName === 'diaosi') {
    // 回复屌丝(普通回复)
    res.reply('hehe');
  } else if (message.FromUserName === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.FromUserName === 'hehe') {
    // 回复一段音乐
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
  } else {
    // 回复高富帅(图文回复)
    res.reply([
      {
        title: '百度一下',
        description: '你也不知道',
        picurl: 'https://www.baidu.com/img/bdlogo.png',
        url: 'http://www.baidu.com/'
      }
    ]);
  }
}));
