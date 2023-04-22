import React, { useState } from 'react'

const Task = ({addTask}) => {
    const [data, setData] = useState({
        names : '',
        date : '',
        remainder : false
    });
    const {names, date, remainder} = data;
    const changeHandler = e => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        if(names && date ) {
            addTask({ names, date, remainder});
            setData({ names : '', date : '', remainder : false})
        }
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label className='form-label'>Enter TaskName</label> <input className='form-control' type='text' name='names' placeholder='enter task name' value={names} onChange={changeHandler} />
        </div>
        <div>
            <label className='form-label'>Enter Date</label> <input className='form-control' type='text' name='date' placeholder='enter date' value={date} onChange={changeHandler} />
        </div>
        <div>
            <label className='form-label'>Remainder</label> <input type='checkbox' name='remainder' placeholder='enter task name' value={remainder} onChange={changeHandler} />
        </div>
        <div>
            <input type='submit' />
        </div>
      </form>
    </div>
  )
}

export default Task
