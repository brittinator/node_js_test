var assert = require("assert");
var Database = require('../database');

describe('database', function() {
  var db = null;
  // hoisting db variable up in scope
  // available to all

  beforeEach(function() {
    // resetting new db instance before each test
    // in case the tests are mutative
    db = new Database('path to file');
  })

  it('can be instantiated', function() {
    assert.equal(db instanceof Database, true);
  })

  it('has a test property that is a function', function() {
    assert.equal(typeof db.test, 'function');
  })

  it("holds onto the 'path' to databse", function() {
    assert.equal(db.path, "path to file");
  })
})
