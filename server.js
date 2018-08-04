// Dependencies
// ===========================================================
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//express.static Used to serve images, css files, and javascript files
app.use(express.static('./app/public'))


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app); //NEEDS TO BE LAST because of the wildcard

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});