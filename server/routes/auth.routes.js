const router = require('express').Router();
const { check } = require('express-validator');

const { signUp } = require('../controllers/auth.controllers');

router.post(
  '/signUp',
  [
    check('email', 'некорректный email').isEmail(),
    check('password', 'Пароль должен содержать от 3 до 12 символов').isLength({ min: 3, max: 10 }),
  ],
  signUp,
);

module.exports = router;
