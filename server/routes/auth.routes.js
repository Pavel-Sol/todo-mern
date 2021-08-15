const router = require('express').Router();
const { check } = require('express-validator');

const { signUp, signIn, auth } = require('../controllers/auth.controllers');
const { authMiddleware } = require('./../meddleware/authMiddleware');

router.post(
  '/signup',
  [
    check('email', 'некорректный email').isEmail(),
    check('password', 'Пароль должен содержать от 3 до 12 символов').isLength({ min: 3, max: 10 }),
  ],
  signUp,
);

router.post('/login', signIn);

router.get('/auth', authMiddleware, auth);

module.exports = router;
