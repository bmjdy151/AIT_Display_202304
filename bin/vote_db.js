const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const voteSchema = new Schema({ 
 animal:{type: String, required: true}
}); 
const voteModel = mongoose.model('dog_cat', voteSchema);

var dog_num = 0;
var cat_num = 0;
var dog_pct = 0;
var cat_pct = 0;


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
  }, 1000);
})
  .catch(err => { 
  console.error('Error connecting to mongo', err); 
  });