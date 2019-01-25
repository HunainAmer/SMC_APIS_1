var express = require('express');
var router = express.Router();
var bodrparse = require('body-parser');
var web3 = require('web3');

var ABI = require('./ABI');

router.get('/buytoken', function (req, res) {
    res.send('Hello from Sheikh!')
  })
router.post('/buytoken', async function (req, res) {
var amount= await req.body.value;
var result = await ABI.methods.buyTokens(req.body.beneficiary).send({
    value : web3.utils.toWei(amount,'ether'),
    from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
    gas:'1000000'
})
res.send(JSON.stringify(result));
console.log(result);
})

module.exports= router ;