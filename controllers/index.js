"use strict";

var Database = require('../database');

exports.indexController = {
  database_test: function(req, res) {
    var db = new Database();
    db.test();

    return res.status(200).send("plain testy massage");
    // need line above because console is checking for a response
  },

  zomg: function getJson(req,res) {
    // zomg is the action
    // if you name the function, it gives better error messages
    var results = {
      zomg: 'zomg it worked!',
      moar: 'moar'
    }
    return res.status(200).json(results);
  },
  another_endpoint: function(req, res) {
    return res.status(200).json({ why: "I don't know."})
  }
}
