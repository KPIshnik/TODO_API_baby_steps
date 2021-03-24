const expres = require("express");
const checkIsAuth = require("../middlewares/checkIsAuth");
const app = expres();

app.get("/", checkIsAuth, (req, res) => {
  res.status(200);
  res.end("Aloha");
});

module.exports = app;
