const router = require('express').Router();

const {
  addTodo,
  getTodo,
  deleteTodo,
  completeTodo,
  updateTodo,
} = require('./../controllers/todo.controllers');

router.post('/add', addTodo);
router.get('/', getTodo);
router.delete('/delete', deleteTodo);
router.put('/complete', completeTodo);
router.put('/update', updateTodo);

module.exports = router;
