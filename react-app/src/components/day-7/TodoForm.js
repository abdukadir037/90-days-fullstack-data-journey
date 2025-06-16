import { useState } from "react";
import './Todo.css'

export function TodoForm({addTodo}) {
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) addTodo(input)
        setInput("")
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
            type="text"
            value={input}
            className="form-input"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task...."
             />
             <button className="form-button" type="submit">Add</button>
        </form>
    )
}