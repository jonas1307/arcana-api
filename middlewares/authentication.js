const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-bearer-token");
  if (!token)
    return res.status(401).send("access denied. no token was provided.");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, {
      issuer: [process.env.JWT_ISSUER],
    });
    req.user = payload;
    next();
  } catch (ex) {
    return res.status(400).send("invalid token.");
  }
};
