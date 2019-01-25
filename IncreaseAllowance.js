var express = require('express');
var router = express.Router();
var bodrparse = require('body-parser');

var ABI = require('./ABI');

router.get('/IncreaseAllowance', function (req, res) {
    res.send('Hello from Hunain!')
  })
router.post('/IncreaseAllowance', async function (req, res) {
var result = await ABI.methods.increaseAllowance(req.body.spender, req.body.addedValue).send({
    from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
    gas:'1000000'
})
res.send(JSON.stringify(result));
console.log(result.status);
})

module.exports= router ;