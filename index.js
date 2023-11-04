const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

// Set up your Express application
app.use(express.static("public")); // Serve static files from the 'public' directory
app.set('views', "views"); // Set the 'views' directory for EJS templates
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.use(bodyParser.urlencoded({ extended: true })); // Enable URL-encoded body parsing

// Define a route for the root URL ("/") and handle it with a callback function

app.get("/index.html/", function(req, res) {
  // Send the "home.html" file as a response when the root URL is accessed
  res.sendFile(__dirname + "/index.html");
});
// Define routes for other HTML pages
app.get("/login.html", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.get("/disease.html", function (req, res) {
    res.sendFile(__dirname + "/disease.html");
});

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
