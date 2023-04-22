import React from 'react'

import Button from './Button'


const Body = ({ task, remove, addTask}) => {
  return (
    <div>
      {
        task.map(user => {
            return (
                <div key={user.id} className='d-flex justify-content-between'>
                    <div>
                        <h3>{user.names}</h3>
                        <h6>{user.date}</h6>
                    </div>
                    
                    <Button title='remove' color='red' onClick={() => remove(user.id)} />
                </div>
            )
        })
      }
    </div>
  )
}

export default Body
