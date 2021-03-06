const { Error } = require('mongoose');
const Todo = require('./../models/Todo');

module.exports.addTodo = async (req, res) => {
  try {
    const { text, userId } = req.body;

    const todo = new Todo({
      owner: userId,
      text,
      completed: false,
    });
    await todo.save();

    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports.getTodo = async (req, res) => {
  try {
    const { userId } = req.query;

    const todos = await Todo.find({ owner: userId });
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.query;

    const deletedTodo = await Todo.findOneAndDelete({ _id: todoId });

    if (deletedTodo) {
      res.status(200).json({ deletedTodo });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.body._id);

    await todo.updateOne({ $set: req.body });

    res.status(200).json({ updatedTodo: req.body });
  } catch (error) {
    console.log(Error);
    res.status(400).json({ message: error.message });
  }
};
