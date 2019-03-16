var express = require("express");
var router = express.Router();
var burguer = require("../models/burguer.js");

router.get("/", function(req, res) {
  burguer.all(function(data) {
    var hbsObject = {
      burguers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burguer", function(req, res) {
  burguer.create([
    "burguer_name", "devoured"
  ],[
    req.body.burguer_name, req.body.devoured
  ], function(result) {
    res.json({ idburguer: result.insertId });
  });
});

router.delete("/api/burguer/:id", function(req, res) {
  var condition = "idburguer = " + req.params.id;
  burguer.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/burguer/:id", function(req, res) {
  var condition = "idburguer = " + req.params.id;
  burguer.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
