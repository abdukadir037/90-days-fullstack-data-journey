// routes/todos.js
const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();
const auth = require('../middleware/auth');

// 🔒 GET only the logged-in user's todos
router.get('/', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔒 Create a new todo for the logged-in user
router.post('/', auth, async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const newTodo = new Todo({
      text: req.body.text,
      completed: false,
      user: req.user.id, // ✅ Link todo to user
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Todo' });
  }
});

// 🔒 Update a user's own todo
router.put('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.id });

    if (!todo) return res.status(404).json({ error: 'Todo not found or unauthorized' });

    todo.text = req.body.text ?? todo.text;
    todo.completed = req.body.completed ?? todo.completed;

    const updated = await todo.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Update failed' });
  }
});

// 🔒 Delete a user's own todo
router.delete('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!todo) return res.status(404).json({ error: 'Todo not found or unauthorized' });

    res.json({ message: 'Todo Deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Deleting failed' });
  }
});

module.exports = router;
