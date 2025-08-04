import { useEffect, useState, useContext } from 'react';
import { TodoForm } from './components/day-7/TodoForm';
import TodoList from './components/day-7/TodoList';
import { AuthContext } from './contexts/AuthContext'; 
import axios from './api/axios';
import { AuthForm } from './components/day-7/AuthForm'; // 👈 Add this

function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { token, login, logout } = useContext(AuthContext); // ⬅️ get login & logout

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('/todos');
        setTodos(res.data);
      } catch (err) {
        console.error('Failed to fetch todos', err);
      }
    };

    if (token) fetchTodos();
  }, [token]);

  const addTodo = async (newItem) => {
    try {
      const res = await axios.post('/todos', newItem);
      setTodos(prev => [...prev, res.data]);
    } catch (err) {
      console.error('Add todo failed', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  const toggleComplete = async (id) => {
    const todo = todos.find(todo => todo._id === id);
    const updatedTodo = { completed: !todo.completed };

    try {
      const res = await axios.put(`/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => todo._id === id ? res.data : todo));
    } catch (err) {
      console.error('Toggle failed', err);
    }
  };

  const updateTodo = async (id, newText) => {
    try {
      const res = await axios.put(`/todos/${id}`, { text: newText });
      setTodos(prev =>
        prev.map(todo => (todo._id === id ? res.data : todo))
      );
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  if (!token) {
    return <AuthForm onAuth={login} />; // 👈 Show login/register if no token
  }

  return (
    <div className='App'>
      <h1>Todo App (Day 7)</h1>
      <button onClick={logout}>Logout</button>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        editingId={editingId}
        setEditingId={setEditingId}
        onEdit={updateTodo}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
