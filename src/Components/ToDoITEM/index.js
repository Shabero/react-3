import React, {useState} from 'react';
const ToDoITEM = ({todo,deleteTodo,handleEditTodo}) => {
    const [edit, setEdit] = useState(false)
    const []
    return (
        <div
        style = {{
            display: 'flex',
            gap: '15px',
            alignItems: 'center'
        }}
        >
            <h3>{todo.title}</h3>
            <input
                type = 'checkbox'
                checked = {todo.completed}
            />
            <button
                className={'btn btn-warning'}
            >
                Edit
                {edit ? 'Save' : 'Edit'}
            </button>
            <button
                className={'btn btn-danger '}
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </div>
    )
}

export default ToDoITEM