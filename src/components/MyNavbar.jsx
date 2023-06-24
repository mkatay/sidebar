import React,{useState,useEffect} from "react";
import { MyButton } from "./MyButton";
import {motion} from 'framer-motion'

export const MyNavbar = ({isOpen,setIsOpen,component}) => {
  const [show, setShow] = useState(true); //az eltüntetéshez kell
  //ahhoz, hogy eltűnjön görgetéskor:
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return( 
  <div className="mynavbar">
    {show && <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
    <div className="title-bar">
        <MyButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <h3>{component}</h3>
    </div>
 
    </motion.div>}

  </div>
)};
