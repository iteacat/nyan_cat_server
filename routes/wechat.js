/**
 * router for wechat interface
 * Created by yin on 4/12/16.
 */


var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = require('../config.js');

router.use('/', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    console.log(message);
    if (message.Content.toLowerCase().trim() === 'music') {
        // 回复一段音乐
        res.reply({
            type: "music",
            content: {
                title: "每日精选",
                description: "Lay Back Down by Eric Lindell",
                musicUrl: "http://dl.last.fm/static/1460553531/113994170/a01c6ec09af45733a35d9667a6aafe090ca5846dbb40229bddbbb1f4e51b1292/Eric+Lindell+-+Lay+Back+Down.mp3",
                hqMusicUrl: "http://dl.last.fm/static/1460553531/113994170/a01c6ec09af45733a35d9667a6aafe090ca5846dbb40229bddbbb1f4e51b1292/Eric+Lindell+-+Lay+Back+Down.mp3",
            }
        });
    } else {
        // 回复高富帅(图文回复)
        switch(message.Content) {
            case '王胤':
                res.reply('天才');
                break;
            case '王晶':
                res.reply('瓜娃子');
                break;
            default:
                res.reply([
                    {
                        title: '我说鸡蛋你说YO',
                        description: '这是煎饼侠的故事',
                        picurl: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG',
                        url: 'http://justwy.github.io/'
                    }
                ]);
             }
    }
}));

module.exports = router;