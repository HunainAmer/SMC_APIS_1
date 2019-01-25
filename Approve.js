var express = require('express');
var router = express.Router();
var bodrparse = require('body-parser');

var ABI = require('./ABI');

router.get('/Approve', function (req, res) {
    res.send('Hello from Sheikh!')
  })
router.post('/Approve', async function (req, res) {
var result = await ABI.methods.approve(req.body.spender, req.body.value).send({
    from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
    gas:'1000000'
})
res.send(JSON.stringify(result));
console.log(result);
})

module.exports= router ;