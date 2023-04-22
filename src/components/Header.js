import React, {useState} from 'react'
// import AddTask from './AddTask'

import Button from './Button'
import Task from './Task';

const Header = ({addTask}) => {
    const [toggle, setToggle] = useState(false);

    const toggleHandler = e => {
        setToggle(!toggle);
    }
  return (
    <div>
      <div className='d-flex justify-content-between'>
      <h3>TO-DO-TASK</h3>
      <Button title={toggle ? 'show' : 'hide'} color={toggle ? 'green' : 'orange'} onClick={toggleHandler} />
    </div>
       {toggle && <Task addTask={addTask} /> }
    </div>
   
  )
}

export default Header
