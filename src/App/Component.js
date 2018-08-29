import React from 'react'

import AlphabetWheel from './AlphabetWheel'
import Counter from './Counter'
import Message from './Message'

import './style.css'

const App = () => (
  <div className='app'>
    <h1>Caesar cipher</h1>
    <div className='main'>
      <Counter />
      <AlphabetWheel />
      <Message />
    </div>
  </div>
)

export default App
