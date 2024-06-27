import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    

    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo])
        
    }

    const handleRemove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const components = todos.map(todo => 
        <Todo  
            key={todo.id}
            id={todo.id}
            task={todo.todo}
            handleRemove={handleRemove}
             />)

    return (
        <div>
            <NewTodoForm add={addTodo}/>
            <ul>
                {components}
            </ul>

        </div>
    )
}

export default TodoList