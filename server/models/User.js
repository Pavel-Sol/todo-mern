const { Schema, model, ObjectId } = require('mongoose');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos: [{ type: ObjectId, ref: 'Todo' }],
});

module.exports = model('User', userSchema);
