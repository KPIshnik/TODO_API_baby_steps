const pool = require("./DBconnection");
const getUserByEmail = require("./getUserByEmail");

const checkIsRegistered = async (email) => {
  const user = await getUserByEmail(email);
  return user ? true : false;
};

module.exports = checkIsRegistered;
