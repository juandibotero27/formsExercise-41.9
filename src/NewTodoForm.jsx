import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'


const NewTodoForm = ({add}) => {
    const [dataForm, setDataForm] = useState({todo: ""})
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setDataForm(dataForm => ({
            ...dataForm,
            [name]: value
        }))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        add({...dataForm, id: uuid()})
        setDataForm({todo: ''})
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Add a New Todo --- </label>
            <input 
                type='text'
                name='todo'
                id='todo'
                value={dataForm.todo}
                placeholder='Anything Pending ?'
                onChange={handleChange}
            ></input>
            <button>ADD</button>

        </form>
    )
}

export default NewTodoForm