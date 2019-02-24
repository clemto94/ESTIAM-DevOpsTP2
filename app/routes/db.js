var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // mongoose.model('Mydb').find({}, (err, items) => {
  //   res.render('index', { title: "Welcome to my app docker compose", increment : items, title: 'Express docker compose' });
  // });
  mongoose.model('Mydb').find({}, (err, items) => {
    if(err){
      console.log(err)
      res.statusCode(404)
    }
    else{
      res.json(items)
      // items[0].increment = items[0].increment + 1
      // mongoose.model('Mydb').findByIdAndUpdate(items[0]._id, items[0], (err, resp)=>{
      //   if(err){
      //     console.log("none", err)
      //     res.send(err);
      //   } else {
      //     console.log("ok", resp)
      //     res.render('index', { title: "Welcome to my app docker compose", increment : resp.increment });    
      //   }
      // })
      
    }
    // res.render('index', { title: "Welcome to my app docker compose", increment : 0 });
  });
});

module.exports = router;
