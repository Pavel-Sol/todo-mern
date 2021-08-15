const router = require('express').Router();

const { addTodo, getTodo } = require('./../controllers/todo.controllers');

router.post('/add', addTodo);
router.get('/', getTodo);

module.exports = router;
