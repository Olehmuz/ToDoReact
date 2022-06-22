import React from 'react'
import "./tasks.scss"
import editSvg from './../../assets/img/edit.svg';
import axios from 'axios';
import AddTask from './addTask/AddTask';
import Task from './Task';
import { Link } from "react-router-dom";
export default function Tasks({list, onTitleListEdit, onAddTask, withoutEmpty, onEditTask, onRemoveTask, onCompletedToggle}) {

  

  const OnTitleEdit = () => { 
    const newTitle = window.prompt("Insert new title", list.name);
    if(newTitle && newTitle !== list.name.toString()){
      axios.patch(`http://localhost:3001/lists/${list.id}`, {name: newTitle});
      onTitleListEdit(list.id, newTitle);
    }
  }

  return list && (
    <div className="tasks">
        <Link to={`/lists/${list.id}`}>
          <h2 style={{color: list.color.hex}} className="tasks__title">{list.name} <img onClick={() => OnTitleEdit(list.id, list.name)} src={editSvg} alt="Edit title" /></h2>
        </Link>
        {!withoutEmpty && !list.tasks.length && (<h2 className='tasks__empty'>Задачі відсутні</h2>)}
        {list && list.tasks.map((task) =>{
            return (
              <Task onCompletedToggle={onCompletedToggle} key={task.id} onEdit={onEditTask} onRemove={onRemoveTask} {...task} listId={list.id} />
            )} 
        )}
        <AddTask onAddTask={onAddTask} list={list}/>
        
    
       
    </div>
  )
}
