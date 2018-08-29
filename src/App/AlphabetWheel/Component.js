import React from 'react'

import Wheel from './Wheel'
import Circle from './Circle'

const AlphabetWheel = () => (
    <div>
        <svg width="600" height="600" viewBox="0 0 600 600">
            <g transform="translate(300,300)" stroke="#000">
                <Wheel
                    letterRatio={0.83}
                    color={'antiquewhite'}
                    backgroundColor='transparent'
                />
                <Wheel
                    letterRatio={0.75}
                    color={'#1D527B'}
                    radiusFix={-100}
                    rotate={true}
                    backgroundColor='transparent'
                />
                <Circle
                    radiusFix={-200}
                />
            </g>
        </svg>
    </div>
)

export default AlphabetWheel
