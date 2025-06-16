import { useState } from "react";
import './Todo.css';

export function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("⚠ Task cannot be empty");
      return;
    }
    addTodo(input.trim());
    setInput("");
    setError("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    if (error) setError(""); // Clear error as user types
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a task..."
          className={`form-input ${error ? 'input-error' : ''}`}
        />
        <button className="form-button" type="submit">Add</button>
      </div>
      {error && <p className="error-text">{error}</p>}
    </form>
  );
}
