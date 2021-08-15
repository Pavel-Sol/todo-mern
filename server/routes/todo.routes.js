const router = require('express').Router();

const { addTodo } = require('./../controllers/todo.controllers');

router.post('/add', addTodo);

module.exports = router;
