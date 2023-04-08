var express = require('express');
var router = express.Router();
var dog_num = 0;
var cat_num = 0;
var dog_pct = 0;
var cat_pct = 0;

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const voteSchema = new Schema({ 
 animal:{type: String, required: true}
}); 
var voteModel = require('../bin/vote_model')

/* GET home page. */

router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://fjord:fjord123!@localhost/vote_db', { useNewUrlParser: true });
    new Promise((resolve) => {
      voteModel.aggregate(
        [
          {$match:{animal:"dog"}},{$count:"ObjectId"}
        ], function(err, result) {
            dog_num = result[0].ObjectId;
            console.log(result[0].ObjectId);
            console.log("dog_num is "+dog_num);
        }
      );
      voteModel.aggregate(
        [
          {$match:{animal:"cat"}},{$count:"ObjectId"}
        ], function(err, result) {
            cat_num = result[0].ObjectId;
            console.log(result[0].ObjectId);
            console.log("cat_num is "+cat_num);
        }
      );
      resolve();
  }).then(() => {
    setTimeout(() => {
      dog_pct = dog_num / (dog_num + cat_num) * 100;
      cat_pct = cat_num / (dog_num + cat_num) * 100;
      console.log("dog_pct is "+Math.round(dog_pct));
      console.log("cat_pct is "+Math.round(cat_pct));
      var data = {
        dog_percent: Math.round(dog_pct),
        cat_percent: Math.round(cat_pct)
      }
      res.render('vote_result', {dog_data: data.dog_percent,cat_data: data.cat_percent});
    }, 1000);
  })
  .catch(err => { 
    console.error('Error connecting to mongo', err); 
    });
  });
  // res.render('vote_result', { title: 'vote_result' });


// router.get('/', function(req, res, next) {
//   res.render('/vote_result')
  // mongoose.connect('mongodb://fjord:fjord123!@localhost/vote_db', { useNewUrlParser: true });
  // new Promise((resolve) => {
  //     voteModel.aggregate(
  //       [
  //         {$match:{animal:"dog"}},{$count:"ObjectId"}
  //       ], function(err, result) {
  //           dog_num = result[0].ObjectId;
  //           console.log(result[0].ObjectId);
  //           console.log("dog_num is "+dog_num);
  //       }
  //     );
  //   voteModel.aggregate(
  //     [
  //       {$match:{animal:"cat"}},{$count:"ObjectId"}
  //     ], function(err, result) {
  //         cat_num = result[0].ObjectId;
  //         console.log(result[0].ObjectId);
  //         console.log("cat_num is "+cat_num);
  //     }
  //   );
  //     resolve();
  // }).then(() => {
  //   setTimeout(() => {
  //     dog_pct = dog_num / (dog_num + cat_num) * 100;
  //     cat_pct = cat_num / (dog_num + cat_num) * 100;
  //     console.log("dog_pct is "+Math.round(dog_pct));
  //     console.log("cat_pct is "+Math.round(cat_pct));
  //     var data = {
  //       dog_percent: dog_pct,
  //       cat_percent: cat_pct
  //     }
  //     res.render('/vote_result', data);
  //   }, 1000);
  // })
  // .catch(err => { 
  //   console.error('Error connecting to mongo', err); 
  //   });
  // }

   module.exports = router;