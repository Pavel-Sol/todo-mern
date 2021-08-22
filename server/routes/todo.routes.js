const router = require('express').Router();

const { addTodo, getTodo, deleteTodo, completeTodo } = require('./../controllers/todo.controllers');

router.post('/add', addTodo);
router.get('/', getTodo);
router.delete('/delete', deleteTodo);
router.put('/complete', completeTodo);

module.exports = router;
