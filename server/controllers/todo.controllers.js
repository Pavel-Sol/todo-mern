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
