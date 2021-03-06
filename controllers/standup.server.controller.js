var Standup = require('../models/standup.server.model.js');

exports.create = function(req, res) {
  var entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.poject,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });

  entry.save();

  res.redirect(301, '/');
};

exports.getNote = function(req, res) {
  res.render('newnote', { title: 'Standup - New Note' });
};
