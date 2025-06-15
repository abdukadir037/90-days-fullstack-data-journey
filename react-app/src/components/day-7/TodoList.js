export function TodoList({todos, deletedTodo, toggleComplete}) {   
    return (
        <ul>
            {todos.map(todo => (
                <li style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }} key={todo.id}>{todo.text}
                <button onClick={() => toggleComplete(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
                <button onClick={() => deletedTodo(todo.id)}>❌</button>
                </li>
            ))}
        </ul>
    )
}