import React, { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const subValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue} disabled={counter >= 20}>+ ({counter + 1})</button>
      <br />
      <button onClick={subValue} disabled={counter <= 0}>- ({counter - 1})</button>
    </>
  )
}

export default App