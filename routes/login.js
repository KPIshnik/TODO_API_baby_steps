const expres = require("express");
const passport = require("../Auth/passport");
const checkNOTAuth = require("../middlewares/checkNOTAuth");
const app = expres();

app.use(expres.json());

app.get("/login", checkNOTAuth, (req, res) => {
  res.end("login page");
});

app.post(
  "/login",
  checkNOTAuth,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login.html",
  })
);

module.exports = app;
