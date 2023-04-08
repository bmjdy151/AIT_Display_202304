var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vote', { title: 'vote' });
});

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const voteSchema = new Schema({ 
 animal:{type: String, required: true}
}); 
var voteModel = require('../bin/vote_model')
// const voteModel = mongoose.model('dog_cat', voteSchema);
// const animal = [{animal:"test"}]; 

router.post('/',function(req,res,next){
  mongoose.connect('mongodb://fjord:fjord123!@localhost/vote_db',{ useNewUrlParser: true , useUnifiedTopology: true })
  .then(()=> console.log('DB conected!'))
  .then(()=>{  
      const animal = [{animal:req.body.animal}]; 
      return voteModel.insertMany(animal); 
      }) 
  .then(()=>{ 
      // mongoose.connection.close(); 
      // console.log("connection closed"); 
      res.redirect('/vote_result');
      }) 
  .catch(err=> console.log(err));
});

module.exports = router;