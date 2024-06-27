import React, {useState} from 'react';
import Box from './Box'
import NewBox from './NewBoxForm';

const BoxList = () => {
    const [boxes,setBoxes] = useState([]);
x
    const addBox = box => {
        setBoxes(boxes => [...boxes, box])
        console.log(boxes)
    }
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const components = boxes.map(box => (
        <Box                 
            id={box.id} 
            height={box.height}
            width={box.width} 
            backgroundColor={box.backgroundColor}
            handleRemove={remove}
            
        />
    ))

    return (
        <div>
            <NewBox addBox={addBox}/>
            {components}
        </div>
    )
}

export default BoxList;
