import React from 'react'


const Showinputs = (props) => {
  return (
    <div className='container'>
      <div className='container d-grid gap-3'>
        {props.users.map( user => (
          <div className='container p-2 my-2 bg-light border'
          bg="light"
          text="dark">
            Name: {user.name} &
            age: {user.age} &
            college: {user.enteredcol}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Showinputs
