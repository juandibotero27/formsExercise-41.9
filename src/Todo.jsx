import React, {useState} from 'react';

const Todo = ({id,task, handleRemove}) => {
    const [count, setCount] = useState(0)
    const counter = () => {
        setCount(count + 1)
        return count
    }
    
    const remove = () => handleRemove(id)

    return (
        <li>-{task}<button onClick={remove}>✅</button></li>
    )
}

export default Todo