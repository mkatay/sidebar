import React from 'react'
import './Sidebar.css'
import {motion } from 'framer-motion'

export const Sidebar=({setComponent,sidebar,setIsOpen})=> {
  const handleClick =(name)=>{
    setComponent(name)
    setIsOpen(false)
  }
  return (
    <motion.div className="sidebar-container" 
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{type:'tween',duration:1}}
      
    >
       {sidebar.map(compName=>
        <motion.div className="sidebar-item" key={compName}   
            whileHover={{scale:1.2,originX:0,color:'#6DFC6B'}}
            onClick={()=>handleClick(compName)}
            >
                {compName}
        </motion.div>
        )}
    </motion.div>
  )
}
