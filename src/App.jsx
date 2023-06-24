import React,{useState} from 'react'
import {Home} from './components/Home'
import { Sidebar } from "./components/Sidebar";
import { Stopwatch } from "./components/Stopwatch";
import { Todo } from "./components/Todo";
import { About } from './components/About';
import {Contact} from './components/Contact';
import './App.css'
import { MyNavbar } from './components/MyNavbar';

const componentMap = {
    Home: <Home />,
    Stopwatch: <Stopwatch />,
    Todo: <Todo />,
    About: <About />,
    Contact:<Contact />
  };

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState('Home');

console.log(Object.keys(componentMap));
  return (
    <div className="app">

        <MyNavbar isOpen={isOpen} setIsOpen={setIsOpen}  component={component} />
 
      {isOpen && <Sidebar setComponent={setComponent} sidebar={Object.keys(componentMap)} setIsOpen={setIsOpen} />}
      {componentMap[component]}
    </div>
  );
}

export default App;
