
import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  const [task, setTask] = useState([]);
    
  const deleteHandler = id => {
    setTask(task.filter(user => user.id !== id))
  }
  const addTask = tasks => {
    // console.log(tasks)
    const id = Math.floor(Math.random() * 1000);
    const newTask = {id, ...tasks};
    setTask([...task, newTask]);
    console.log(task)
  }
 
  return (
    <div className="card w-25">
      <div className='card-body'>
        <Header addTask={addTask} />
        <Body task={task} remove={deleteHandler}  />
      </div>
    </div>
  );
}
export default App;
