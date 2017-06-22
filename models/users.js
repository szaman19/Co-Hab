var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
  _id: Schema.Types.ObjectId,
  name: String,
  email:String,
  phone: String,
  groups: Array
},
{
  collection: 'User_Info'
}
);

module.exports = mongoose.model('User',userSchema);
