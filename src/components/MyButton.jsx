import React from 'react'
import './MyButton.css'

export const MyButton=({isOpen,setIsOpen})=> {
  return (
    <div className="btn-container" onClick={()=>setIsOpen(!isOpen)}>
      <i className="fa-solid fa-bars fa-2x"></i>
    </div>
  )
}
