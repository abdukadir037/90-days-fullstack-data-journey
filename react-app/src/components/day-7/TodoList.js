import { useEffect, useRef, useState } from "react"
import './Todo.css'

export function TodoList({todos, onEdit, editingId, setEditingId, deletedTodo, toggleComplete}) {   
    const [editText, setEditText] = useState('')

    function handleEdit(todo) {
        setEditText(todo.text)
        setEditingId(todo.id)
    }

    function handleSave(id) {
        if (editText.trim())
            onEdit(id, editText.trim())
    }

    function handleKeyDown(e, id) {
        if (e.key === 'Enter') handleSave(id)
        if (e.key === 'Escape') setEditingId(null)
    }

    return (
        <ul>
            {todos.map(todo => (
                <li className="todo-item" style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    opacity: todo.completed ? '0.7' : '1'
                }} key={todo.id}>
                {editingId === todo.id ? (
                    <>
                        <input className="todo-edit-input" type="text" onKeyDown={(e) => handleKeyDown(e, todo.id)} onChange={(e) => setEditText(e.target.value)}/>
                        <button onClick={() => handleSave(todo.id)}>Save</button>
                        <button onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                ) : ( 
                <>
                <span>{todo.text}</span>
                <button onClick={() => toggleComplete(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => deletedTodo(todo.id)}>❌</button> 
                </>
                )}
                </li>
            ))}
        </ul>
    )
}