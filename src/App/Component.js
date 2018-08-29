import React from 'react'

import AlphabetWheel from './AlphabetWheel'
import Counter from './Counter'
import Message from './Message'

import './style.css'

const App = () => (
  <div className='app'>
    <Counter />
    <AlphabetWheel />
    <Message />
  </div>
)

export default App
