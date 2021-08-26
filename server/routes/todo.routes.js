const router = require('express').Router();

const { addTodo, getTodo, deleteTodo, updateTodo } = require('./../controllers/todo.controllers');

router.post('/add', addTodo);
router.get('/', getTodo);
router.delete('/delete', deleteTodo);
router.put('/update', updateTodo);

module.exports = router;
