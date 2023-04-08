//Require Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var voteSchema = new Schema({ 
    animal:{type: String, required: true}
   }); 
module.exports = mongoose.model('dog_cat', voteSchema);