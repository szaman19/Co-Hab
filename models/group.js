var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
  _id: Schema.Type.ObjectId,
  name: String,
  members: Array,
  announcement: []
},{
  collection: 'Groups'
});

module.exports = mongoose.model('Group', groupSchema);
