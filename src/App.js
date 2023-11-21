import React,{useState} from 'react';
import ToDoITEM from './Components/ToDoITEM';
const App = () => {
    const [todos,setTodos] = useState(todosArray);
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEditTodo = (data) => {
        setTodos(todos.map(el => el.id === data.id))
    }

    return (
        <div className={'container d-flex justify-content-center p-5 '}>
            <div>
                <h1 className={'text-center '}>Todo App</h1>
                {
                    todos.map((todo) =>
                        <ToDoITEM
                            key={todo.id}
                            deleteTodo={deleteTodo}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            handleEditTodo={handleEditTodo}
                        />
                )
                }
            </div>
        </div>
    )
}


export default App;

const todosArray = [
    {
        id: 1,
        title: 'Todo 1',
        completed: true
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false
    }

]