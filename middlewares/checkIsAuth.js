const checkIsAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect(401, "/login");
};

module.exports = checkIsAuth;
