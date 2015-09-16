"user strict";

var sqlite3 = require('sqlite3').verbose();

function Database(path) {
  this.path = path;
}

Database.prototype = {
  // reassigning prototype
  test: function() { console.log('yay, it works!');},

  query: function() {
    var db = new sqlite3.Database(this.path);

    db.serialize(function() {
      
    })
  }
}

// Database.prototype.test = function() {}
// amends existing protype (which is currently empty)

// end of file
module.exports = Database;
