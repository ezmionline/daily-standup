var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  inpediment: String,
  createdOn: { type: Date, default: Date.now }
});
