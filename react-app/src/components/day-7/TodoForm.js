import { useState } from "react";

export function TodoForm({addTodo}) {
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) addTodo(input)
        setInput("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task...."
             />
             <button type="submit">Add</button>
        </form>
    )
}