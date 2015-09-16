"use strict";

exports.indexController = {
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
