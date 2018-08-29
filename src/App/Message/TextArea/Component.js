import React from 'react'

import './style.css'

const TextArea =({
  header,
  message,
  readonly,
  onChange,
}) => (
  <div className='textarea'>
    <p>{header}</p>
    <textarea
      rows='10'
      readOnly={readonly}
      onChange={(e) => onChange(e.target.value)}
      value={message}
    />
  </div>
)

export default TextArea
