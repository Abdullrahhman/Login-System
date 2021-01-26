const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const port = process.env.PORT || 8080;

// import the router file
const router = require("./router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);
// listen to the server
app.listen(port, () => {
  console.log("Listening to the server localhost:8080");
});

// access to css
app.use(express.static("public"));
app.use(express.static("assets"));
app.set("view engine", "ejs");
app.use("/route", router);
/// home rout
app.get("/", (req, res) => {
  res.render("base", { title: "login System" });
});
