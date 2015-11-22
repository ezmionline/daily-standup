var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  inpediment: String,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Standup', standupSchema);
