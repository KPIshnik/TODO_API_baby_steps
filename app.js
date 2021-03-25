const express = require("express");
const session = require("express-session");
const { PORT } = require("./configs/connectionConfig");
const { HOST } = require("./configs/connectionConfig");
const passport = require("./Auth/passport");
const aloha = require("./routes");
const login = require("./routes/login");
const swaggerUi = require("swagger-ui-express");
const swagger = require("./swagger.json");
const register = require("./routes/register");
const session_config = require("./configs/session_config");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
//app.use('/api/v1', router);

app.use(session(session_config));

app.use(passport.initialize());
app.use(passport.session());

app.use(aloha);
app.use(login);
app.use(register);

app.listen(PORT, HOST, () => {
  console.log(`server started at ${PORT}`);
});
