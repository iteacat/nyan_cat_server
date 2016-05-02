/**
 *
 * Created by yin on 5/1/16.
 */

var express = require('express');
var router = express.Router();
var stringUtils = require('../utils/stringUtils')

/* GET users listing. */
router.use('/image/:imgUrl', function(req, res, next) {
    var encodedImgLink = req.params.imgUrl
    var decodedImgLink = stringUtils.decode(encodedImgLink)
    console.log('request url: ', decodedImgLink)
    res.send(`<img src=${decodedImgLink} alt="no image found" />`);
});

module.exports = router;

