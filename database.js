"user strict";

var sqlite3 = require('sqlite3').verbose();

function Database() {

}

Database.prototype = {
  // reassigning prototype
  test: function() { console.log('yay, it works!');}
}

// Database.prototype.test = function() {}
// amends existing protype (which is currently empty)

// end of file
module.exports = Database;
