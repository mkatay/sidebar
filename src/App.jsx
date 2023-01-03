import "./App.css";
import React, {Components, useState } from "react";

import { MyButton } from "./components/MyButton";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { Stopwatch } from "./components/Stopwatch";
import { Todo } from "./components/Todo";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [component,setComponent] = useState('Home');
 
return(
    <div className="app">
      <div className="title-bar">
        <MyButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <h3>KAM's site</h3>
      </div>
      {isOpen && <Sidebar setComponent={setComponent}/>}
       {component=='Home' && <Home  /> }
       {component=='Stopwatch' && <Stopwatch />}
       {component=='Todo' && <Todo/>}
    </div>
  );
}

export default App;
