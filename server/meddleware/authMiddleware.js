const jwt = require('jsonwebtoken');

module.exports.authMiddleware = (req, res, next) => {
  if (req.metod === 'OPTIONS') {
    return next();
  }

  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Ошибка авторизации' });
  }

  const decode = jwt.verify(token, process.env.SECRET_KEY);
  req.user = decode;

  console.log('req.user', req.user);
  next();
};
