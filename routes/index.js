const expres = require("express");
const checkIsAuth = require("../middlewares/checkIsAuth");
const app = expres();

app.get("/", checkIsAuth, (req, res) => {
  res.end("Aloha");
});

module.exports = app;
