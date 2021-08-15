const { Schema, model, ObjectId } = require('mongoose');

const todoSchema = new Schema({
  owner: { type: ObjectId, ref: 'User' },
  text: { type: String },
  completed: { type: Boolean, default: false },
});

module.exports = model('Todo', todoSchema);
