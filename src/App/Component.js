import React from 'react'

import AlphabetWheel from './AlphabetWheel'
import Counter from './Counter'
import Message from './Message'
import Header from "./Header";

import './style.css'

const App = () => (
  <div className='app'>
    <Header/>
    <div className='main'>
      <Counter/>
      <AlphabetWheel/>
      <Message/>
    </div>
  </div>
)

export default App
