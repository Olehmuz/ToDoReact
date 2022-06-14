import React from 'react'
import "./tasks.scss"
import editSvg from './../../assets/img/edit.svg';
export default function Tasks() {
  return (
    <div className="tasks">
        <h2 className="tasks__title">Фронтенд <img src={editSvg} alt="Edit title" /></h2>

        <div className="checkbox">
          <input id="check1" type="checkbox" />
          <label htmlFor='check1'>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <input type="text" value="Изучить JavaScript" />
        </div>
    
        <div className="checkbox">
          <input id="check2" type="checkbox" />
          <label htmlFor='check2'>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <input type="text" value="Изучить JavaScript" />
        </div>
        
        <div className="checkbox">
          <input id="check3" type="checkbox" />
          <label htmlFor='check3'>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <input type="text" value="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" />
        </div>

        <div className="checkbox">
          <input id="check4" type="checkbox" />
          <label htmlFor='check4'>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
          <input type="text" value="Изучить JavaScript" />
        </div>
    </div>
  )
}
