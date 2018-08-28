import React from 'react'

import './style.css'

const Counter = ({
  count,
  counterClicked,
}) => (
  <div className='counter'>
    <button onClick={() => counterClicked(true)} disabled={count === 25}>UP</button>
    <h2>{count}</h2>
    <button onClick={() => counterClicked(false)} disabled={count === 0}>DOWN</button>
  </div>
)

export default Counter
