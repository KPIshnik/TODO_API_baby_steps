const expres = require("express");
const checkNOTAuth = require("../middlewares/checkNOTAuth");
const registerUser = require("../controllers/registerUserr");
const app = expres();

app.use(expres.json());

app.get("/register", checkNOTAuth, (req, res) => {
  res.status(200);
  res.end("register page");
});

app.post("/register", checkNOTAuth, registerUser);

module.exports = app;
