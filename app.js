var express = require('express');
var app = express();
var body_parser = require('body-parser');
var port = process.env.PORT || 3000;

var mint = require('./MintToken.js');
var transfer = require('./TransferToken.js');
var approve = require('./Approve.js');
var transferFrom = require('./TransferFrom.js');
var increaseAllowance = require('./IncreaseAllowance.js');
var decreaseAllowance = require('./DecreaseAllowance.js');
var changeRate = require('./ChangeRate.js');
var buytoken = require('./BuyToken.js');
var burntoken = require('./Burn.js');
var burnfrom = require('./BurnFrom.js');
var pause = require('./Pausecontract.js');




app.use(body_parser.json())

app.use(mint);
app.use(transfer);
app.use(approve);
app.use(transferFrom);
app.use(increaseAllowance);
app.use(decreaseAllowance);
app.use(changeRate);
app.use(buytoken);
app.use(burntoken);
app.use(burnfrom);
app.use(pause);



app.listen(port);
console.log('app is listining on port 3000');