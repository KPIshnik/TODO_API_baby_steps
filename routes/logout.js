const expres = require("express");
const checkIsAuth = require("../middlewares/checkIsAuth");
const app = expres();

app.get("/logout", checkIsAuth, (req, res) => {
  res.end("logout page");
});

app.post("/logout", checkIsAuth, (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = app;
