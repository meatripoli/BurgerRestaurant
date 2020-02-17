var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
// Import routes and give the server access to them.
var routes = require("./controllers/htmlroute.js");
// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require("./controllers/htmlroute.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
