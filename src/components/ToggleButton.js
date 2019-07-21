import React, { useEffect, useState } from 'react';

const ToggleButton = () => {

  const [ display, setDisplay ] = useState(true)

  const toggleDisplay = () => setDisplay(!display)

  useEffect(() => {
    console.log(display)
  }, [display])

  return (
    <div>
      <h2>Toggle Button</h2>
      <button onClick={toggleDisplay}>
        Toggle display
      </button>
      <p>Display: {display === true ? 'True' : 'False'}</p>
      {display && (<p>displays here if true!</p>)}
    </div>
  )
}

export default ToggleButton
