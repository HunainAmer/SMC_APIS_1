var express = require('express');
var router = express.Router();
var bodrparse = require('body-parser');

var ABI = require('./ABI');

router.get('/pause', function (req, res) {
    res.send('Hello from Sheikh!')
  })
router.post('/pause', async function (req, res) {
var result = await ABI.methods.pause().send({
    from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
    gas:'1000000'
})
res.send(JSON.stringify(result));
console.log(result);
})

router.get('/unpause', function (req, res) {
    res.send('Hello from Sheikh!')
  })
router.post('/unpause', async function (req, res) {
var result = await ABI.methods.unpause().send({
    from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
    gas:'1000000'
})
res.send(JSON.stringify(result));
console.log(result);
})


module.exports= router;