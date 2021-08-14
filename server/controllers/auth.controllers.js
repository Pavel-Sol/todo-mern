const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//------------регистрация контроллер------------
module.exports.signUp = async (req, res) => {
  try {
    // express-validator проверка
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('validation ERROR ', errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: 'пользователь с таким email уже зарегистрирован' });
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      email,
      password: hashPassword,
    });

    await newUser.save();

    res.json({ message: 'новый пользователь создан' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

//------------аутентификация контроллер------------
module.exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'неверный email, такого пользователя не существует' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'неверный пароль' });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '2h' });

    res.json({
      token,
      currentUser: {
        id: user.id,
        email: user.email,
        todos: user.todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
