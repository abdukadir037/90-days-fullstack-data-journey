import { useCallback, useEffect, useState } from 'react';
import {TodoForm} from './components/day-7/TodoForm'
// import {TodoList} from './components/day-7/TodoList'
import TodoList from './components/day-7/TodoList'

function App() {
  // const [todos,setTodos] = useState([])
  const STORAGE_VERSION = 'todos-v1'
  localStorage.getItem(STORAGE_VERSION)

  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos')
  return saved ? JSON.parse(saved) : []
})


  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, {id: Date.now(), completed: false, text}])
  }, [])


  // useEffect(() => {
  //   const savedTodos = localStorage.getItem('todos');
  //   if (savedTodos) setTodos(JSON.parse(savedTodos));
  // }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, 500)
    return () => clearTimeout(timer);
  }, [todos])

  function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  
  function toggleComplete(id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const [editingId, setEditinId] = useState(null)
  
  function updateTodo(id, newText) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, text: newText} : todo
    ))

    setEditinId(null)
  }

  return (
    <div className='App'>
      <h1>Todo App (Day 7)</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList editingId={editingId} setEditingId={setEditinId} onEdit={updateTodo} onToggle={toggleComplete} onDelete={deleteTodo} todos={todos}/>
    </div>
  )
}

export default App;
