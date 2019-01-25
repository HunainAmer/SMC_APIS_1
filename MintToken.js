var express = require('express');
var router = express.Router();
var bodrparse = require('body-parser');

var ABI = require('./ABI');



// var a= async ()=>{await ABI.methods.mint("0x36A4491Ff3b763EB5809bb3A62233Fb192678b28","10").send({
//     from : accounts[0],
//     value : web3.utils.toWei(req.body.amount,'ether'),
//     gas: '1000000'
//   })}


// router.get('/MintToken',async function (req,res){
//   console.log('Hi its me !');
//  var a = await ABI.methods.MintToken("0x36A4491Ff3b763EB5809bb3A62233Fb192678b28","10").send({
//     from : '0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
//     // from : ABI.b,
//     // value : ABI.extend.utils.toWei('0.00001','ether'),
//     gas: '1000000'
//   })
//     res.send(JSON.stringify(a));
//     console.log(a);
//   })

  router.get('/MinToken', function (req, res) {
    res.send('Hello from Hunain!')
  })

  router.post('/MinToken', async function (req, res) {
    var a = await  ABI.methods.MintToken(req.body.account, req.body.value).send({
      from : '0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
      // from : ABI.b,
      // value : ABI.extend.utils.toWei('0.00001','ether'),
      gas: '1000000'
    })
    res.send(JSON.stringify(a));
    console.log(a);
  })

module.exports= router ;


  

// ABI.methods.totalSupply().call().then(res =>{
//   console.log(res);
// })


// console.log(a , "Hi its me hunain");