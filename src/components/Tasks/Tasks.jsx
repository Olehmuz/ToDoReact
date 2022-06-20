import React from 'react'
import "./tasks.scss"
import editSvg from './../../assets/img/edit.svg';
import axios from 'axios';
import AddTask from './addTask/AddTask';
export default function Tasks({list, onTitleListEdit, onAddTask, withoutEmpty}) {

  

  const OnTitleEdit = () => { 
    const newTitle = window.prompt("Insert new title", list.name);
    if(newTitle && newTitle !== list.name.toString()){
      axios.patch(`http://localhost:3001/lists/${list.id}`, {name: newTitle});
      onTitleListEdit(list.id, newTitle);
    }
  }

  return list && (
    <div className="tasks">
        <h2 style={{color: list.color.hex}} className="tasks__title">{list.name} <img onClick={() => OnTitleEdit(list.id, list.name)} src={editSvg} alt="Edit title" /></h2>
        {!withoutEmpty && !list.tasks.length && (<h2 className='tasks__empty'>Задачі відсутні</h2>)}
        {list && list.tasks.map((task) =>{
            return (
              <div className="checkbox" key={task.id}>
                <input id={`task-${task.id}`} type="checkbox" />
                <label htmlFor={`task-${task.id}`}>
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </label>
                <input type="text" value={task.text} readOnly/>
              </div>
            )} 
        )}
        <AddTask onAddTask={onAddTask} list={list}/>
        
    
       
    </div>
  )
}
