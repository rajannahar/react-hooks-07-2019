import React, { useEffect, useState } from 'react'

const CountButton = () => {

  const [ count, setCount ] = useState(0);

  const handleIncrement = () => setCount(count+1)
  const handleDecrement = () => setCount(count-1)
  const handleReset = () => setCount(0)

  useEffect(() =>  {
    console.log(count)
  }, [count])


  return (
    <div>
      <h2>Count Button</h2>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleReset}>Reset</button>

      <p>{count}</p>
    </div>
  )
}

export default CountButton;
