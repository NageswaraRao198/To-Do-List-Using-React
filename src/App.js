import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React,{useEffect, useState} from 'react';
import './App.css';
import Tasks from './components/tasks';
import Navs from './components/navs'
import InputForm from './components/form'
import NoTasks from './components/noTasks'
import { Alert } from 'bootstrap';
function App() {
  const lsTasks=localStorage.getItem('tasks');
  const [inputValue,setInputValue]=useState('');
  let [lists,setLists]=useState(JSON.parse(lsTasks));
  const handleKeyDown=(e)=>{
    if(e.key==='Enter' && inputValue.trim() !== ''){
      addTask();
    }
  }
  document.addEventListener('keydown',handleKeyDown);
  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }
 
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(lists));
  },[lists])

  const addTask=()=>{
    if(inputValue){
      setLists([...lists,inputValue]);
      setInputValue('');  
    }
  }
  const deleteTask=(item)=>{
    setLists(lists=>lists.filter(value=>value!==item));
  }

  return (
    <div>
      <div className="input-container">
          <InputForm inputValue={inputValue} addTask={addTask} handleChange={handleChange} onKeyDown={handleKeyDown} />
          {/* <Navs /> */}
          {!lists.length? <NoTasks/> : <Tasks lists={lists} deleteTask={deleteTask}  />}
      </div>
    </div>
  );
}

export default App;
