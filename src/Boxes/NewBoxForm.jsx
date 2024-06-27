import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'

const NewBox = ({addBox}) => {
    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox({...formData, id: uuid() })
        setFormData(INITIAL_STATE)
        
    }


    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor='height'>Height</label>
            <input 
                type='text'         
                id='height' 
                name='height'       
                placeholder='Height'
                value={formData.height}
                onChange={handleChange}
                >
                </input>
            <label htmlFor='width'>Width</label>
            <input 
                type='text'         
                id='width' 
                name='width'       
                placeholder='width'
                value={formData.width}
                onChange={handleChange}
                >
                </input>
            <label htmlFor='backgroundColor'> Color</label>
            <input 
                type='text'         
                id='backgroundColor' 
                name='backgroundColor'       
                placeholder='Color'
                value={formData.backgroundColor}
                onChange={handleChange}

                >
                </input>
            <button>Add New Box</button>
        </form>
    )


}

export default NewBox;