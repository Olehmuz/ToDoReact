import axios from 'axios';
import React, { useState } from 'react'
import "./addTask.scss";
export default function AddTask({onAddTask, list}) {
    const [inputValue, setInputValue] = useState("");
    const [isVisible, setVisibiity] = useState(false);
    const toggleFormVisibility = () => {
        isVisible === false ? setVisibiity(true) : setVisibiity(false);
        setInputValue("");
    }
    const addTask = () => {
        const newTask = {
            "listId": list.id,
            "text": inputValue,
            "completed": false
        }
        axios.post("http://localhost:3001/tasks", newTask).then(({data}) => {
            addTask(data);
        })
    }

    return (
        <React.Fragment>
           {!isVisible &&  <div className='tasks__addForm' onClick={toggleFormVisibility}>
                <svg style={{marginLeft: "4px"}}
                    width="16"
                    height="16"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M6 1V11"
                    stroke="#868686"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M1 6H11"
                    stroke="#868686"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                <span className='tasks__addForm--span'>Add task</span>
            </div>}
            {isVisible && 
                <div className='form'>
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Task text'/>
                    <button className='btn' onClick={addTask}>Add task</button><button onClick={toggleFormVisibility} className='btn--cancel'>Сancel</button>
                </div>}
        </React.Fragment>
    )
}
