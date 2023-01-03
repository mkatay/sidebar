import React from 'react'
import './Sidebar.css'
import data from '../sidebar.json'
import {motion } from 'framer-motion'

export const Sidebar=({setComponent})=> {
    //console.log(data.sidebar)
  return (
    <motion.div className="sidebar-container" 
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{type:'tween',duration:1}}
      
    >
       {data.sidebar.map(obj=>
        <motion.div className="sidebar-item" key={obj.id}   
            whileHover={{scale:1.2,originX:0,color:'#6DFC6B'}}
            onClick={()=>setComponent(obj.name)}
            >
                {obj.name}
        </motion.div>
        )}
    </motion.div>
  )
}
