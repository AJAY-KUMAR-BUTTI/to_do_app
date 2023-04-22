import React from 'react'

const Button = ({ title, color, onClick }) => {
  return (
    <div>
      <button className='btn' style={{backgroundColor : color}} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button
