import './Todo.css'

import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function TodoList({ 
  todos, 
  onDelete, 
  onToggle, 
  onEdit,
  editingId,
  setEditingId
}) {
  const [editText, setEditText] = useState('');
  const editInputRef = useRef(null);

  // Focus edit input when entering edit mode
  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

  const handleEdit = (todo) => {
    setEditingId(todo._id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      onEdit(id, editText.trim());
      setEditText('')
      setEditingId(null)
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') handleSave(id);
    if (e.key === 'Escape') setEditingId(null);
  };

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li 
          key={todo._id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          {editingId === todo._id ? (
            <div className="edit-mode">
              <input
                ref={editInputRef}
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, todo._id)}
                className="edit-input"
              />
              <div className="edit-actions">
                <button 
                  onClick={() => handleSave(todo._id)}
                  disabled={!editText.trim()}
                  className="save-btn"
                >
                  ✓
                </button>
                <button 
                  onClick={() => setEditingId(null)}
                  className="cancel-btn"
                >
                  ✗
                </button>
              </div>
            </div>
          ) : (
            <div className="view-mode">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo._id)}
                className="toggle"
              />
              <span className="todo-text">{todo.text}</span>
              <div className="actions">
                <button 
                  onClick={() => handleEdit(todo)}
                  className="edit-btn"
                  aria-label="Edit"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => onDelete(todo._id)}
                  className="delete-btn"
                  aria-label="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  editingId: PropTypes.string,
  setEditingId: PropTypes.func.isRequired
};