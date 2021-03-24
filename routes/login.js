const expres = require("express");
const passport = require("../Auth/passport");
const checkIsAuth = require("../middlewares/checkIsAuth");
const checkNOTAuth = require("../middlewares/checkNOTAuth");
const app = expres();

app.use(expres.json());

app.get("/login", checkNOTAuth, (req, res) => {
  res.status(200);
  res.end("login page");
});

app.post(
  "/login",
  checkNOTAuth,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.delete("/login", checkIsAuth, (req, res) => {
  req.logout();
  res.status(200);
  res.redirect("/login");
});

module.exports = app;
