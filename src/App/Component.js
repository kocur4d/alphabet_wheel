import React, {Fragment} from 'react'

import AlphabetWheel from './AlphabetWheel'
import Counter from './Counter'
import Message from './Message'
import Header from "./Header";

import './style.css'


const App = () => (
    <Fragment>
        <Header/>
        <div className='app'>
            <Counter/>
            <AlphabetWheel/>
            <Message/>
        </div>
    </Fragment>

)

export default App
