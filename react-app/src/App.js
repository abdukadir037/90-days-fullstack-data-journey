import { useState } from 'react';
import {TodoForm} from './components/day-7/TodoForm'
import {TodoList} from './components/day-7/TodoList'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([...todos, {id: Date.now(), completed: false, text}])
  }

  function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  
  function toggleComplete(id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <div className='App'>
      <h1>Todo App (Day 7)</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList toggleComplete={toggleComplete} deletedTodo={deleteTodo} todos={todos}/>
    </div>
  )
}

export default App;
