var orm = require("../config/orm.js");

var burguer = {
  all: function(cb) {
    orm.all("burguers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burguers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burguers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burguers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burguer;
