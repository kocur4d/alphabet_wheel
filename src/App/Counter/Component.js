import React from 'react'

import './style.css'

const Counter = ({
                     count,
                     counterClicked,
                 }) => {
    const disabledUpClass = count === 25 ? 'disable' : null;
    const disabledDownClass = count === 0 ? 'disable' : null;
    return <div className='counter'>
        <div className={['arrow-up', disabledUpClass].join(' ')} onClick={() => counterClicked(true)}></div>
        <h2>{count}</h2>
        <div className={['arrow-down', disabledDownClass].join(' ')} onClick={() => counterClicked(false)}></div>
    </div>
};

export default Counter
