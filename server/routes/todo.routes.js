const router = require('express').Router();

const { addTodo, getTodo, deleteTodo } = require('./../controllers/todo.controllers');

router.post('/add', addTodo);
router.get('/', getTodo);
router.delete('/delete', deleteTodo);

module.exports = router;
