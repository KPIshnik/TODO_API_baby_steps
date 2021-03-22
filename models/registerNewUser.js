const pool = require("./DBconnection");

const registerNewUser = async (username, hashedPass, email) => {
  const client = await pool.connect();
  try {
    const res = await client.query(
      "INSERT INTO users( email, username, password)  VALUES( $1,$2,$3)",
      [email, username, hashedPass]
    );
    return "user registered";
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
};

module.exports = registerNewUser;
