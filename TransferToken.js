var express = require('express');
var router = express.Router();
var bodrparse = require('body-parser');

var ABI = require('./ABI');

router.get('/TransferToken', function (req, res) {
    res.send('Hello from Hunain!')
  })
router.post('/TransferToken', async function (req, res) {
var a = await ABI.methods.transfer(req.body.to, req.body.value).send({
    from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
    gas:'1000000'
})
res.send(JSON.stringify(a));
console.log(a.blockHash);
})

module.exports= router ;