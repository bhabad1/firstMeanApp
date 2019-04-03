/**
 * @author Shital Ghule
 * @email sheetalsg@kesari.in
 * @create date 2019-04-03 19:19:55
 * @modify date 2019-04-03 19:19:55
 * @desc [description]
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
res.send("Started working on new route")
})

module.exports = router;