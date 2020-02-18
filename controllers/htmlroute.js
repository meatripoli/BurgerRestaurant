var db = require("../models");
module.exports = function(app) {
  app.post("/add", function(req, res) {
    let burgerName = req.body.text;
    db.sandwich.create({
      sandwiches_name: burgerName
    }).then(function(dbSandwich){
      db.sandwich.findAll({}).then(function(dbSandwich) {
        res.json(dbSandwich)
      })
    })
  })

  app.put("/update",function(req,res){
    db.sandwich.update({
      ate: true
    }, 
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbSandwich) {
      db.sandwich.findAll({}).then(function(dbSandwich) {
        res.json(dbSandwich)
      })
    });
  })
};