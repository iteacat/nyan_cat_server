/**
 *
 * Created by yin on 5/1/16.
 */

function decode(base64Str) {
    var buf = new Buffer(base64Str, 'base64');
    return buf.toString()
}

function encode(str) {
    var buf = new Buffer(str, 'utf8');
    return buf.toString('base64');
}

module.exports = {
    encode: encode,
    decode: decode
}

console.log(encode('https://treqme.s3.amazonaws.com/testabc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI3TJFBY3JR43PCKQ%2F20160501%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20160501T131524Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=86eb2ac79ccefd90e6e15509e46410f616ede53a12465cca58e32a2d2cb95d9f'))