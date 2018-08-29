import React from 'react'

import TextArea from './TextArea'

import './style.css'

const Message = ({
  message,
  cipher,
  onChange,
}) => (
  <div className='message'>
    <TextArea
      header='Message'
      message={message}
      onChange={onChange}
    />
    <TextArea
      header='Cipher'
      message={cipher}
      readonly={true}
    />
  </div>
)

export default Message
