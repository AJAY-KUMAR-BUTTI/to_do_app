import React, { useState } from 'react'

const AddTask = ({ addTask }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [remainder, setRemainder] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        addTask({ name, date, remainder });
        console.log(`${name} ${date} ${remainder}`)
        setName('');
        setDate('');
        setRemainder('');
    }

  return (
    <div>
      <form className='add-form' onSubmit={submitHandler}>
        <div>
            <label className='form-label'>Enter TaskName</label> <input className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label className='form-label'>Enter Date</label> <input className='form-control' type='text' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
            <label className='form-label'>Remainder</label> <input type='checkbox' id='checkbox' value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)} />
        </div>
        <div className='d-grid gap-2'>
            <input className='btn btn-primary mb-5' type='submit' />
        </div>
      </form>
    </div>
  )
}

export default AddTask
