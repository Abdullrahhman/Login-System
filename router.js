var express = require("express");
var router = express.Router();

const info = {
  email: "admin@gmail.com",
  password: "admin123",
};

// login user
router.post("/login", (req, res) => {
  if (req.body.email == info.email && req.body.password == info.password) {
    req.session.user = req.body.email;
    res.redirect("/route/dashboard");
  } else {
    res.end("Login Faild..");
  }
});

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("Anauthorize User");
  }
});

// log out user
router.post("/logout", (req, res) => {
  res.redirect("/route/logout");
});

router.get("/logout", (req, res) => {
  if (req.session.user) {
    res.render("logout", { user: req.session.user });
  } else {
    res.send("Anauthorize User");
  }
});

module.exports = router;
