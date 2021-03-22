const express = require("express");
const session = require("express-session");
const { PORT } = require("./configs/connectionConfig");
const { HOST } = require("./configs/connectionConfig");
const passport = require("./Auth/passport");

const aloha = require("./routes");
const login = require("./routes/login");
const logout = require("./routes/logout");
const register = require("./routes/register");

const app = express();

app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(aloha);
app.use(login);
app.use(register);
app.use(logout);

app.listen(PORT, HOST, () => {
  console.log(`server started at ${PORT}`);
});
