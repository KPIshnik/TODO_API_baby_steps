const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const getUserByEmail = require("../models/getUserByEmail");
const verifyPassword = require("../models/verifyPassword");
const getUserById = require("../models/getUserrById");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, pass, done) => {
      try {
        const user = await getUserByEmail(email);

        if (!user) return done(null, false);
        if (!(await verifyPassword(user, pass))) return done(null, false);

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUserById(id);
    return done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
