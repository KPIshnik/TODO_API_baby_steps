const checkIsRegistered = require("../models/checkIsRegistered");
const registerNewUser = require("../models/registerNewUser");
const bcript = require("bcrypt");

const registerUser = async (req, res) => {
  const newUser = req.body;
  try {
    if (newUser.password != newUser.password2) {
      res.end("pass does not match");
      return;
    }

    const isRegistered = await checkIsRegistered(req.body.email);

    if (isRegistered) {
      res.end("this email already registered, try anotherone");
      return;
    }

    const { userName, password, email } = newUser;

    const hashedPass = await bcript.hash(password, 10);
    const result = await registerNewUser(userName, hashedPass, email);

    res.end(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = registerUser;
