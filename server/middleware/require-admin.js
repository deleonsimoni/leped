const httpError = require('http-errors');

const requireAdmin = function (req, res, next) {
  if (req.user && (req.user.roles.indexOf('admin') > -1 || req.user.roles.indexOf('geprod') > -1 || req.user.roles.indexOf('geped') > -1 || req.user.roles.indexOf('gedoc') > -1)) return next();
  const err = new httpError(401);
  return next(err);
};

module.exports = requireAdmin;
