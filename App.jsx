import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  // Simulate an expensive task

  //slowFunction
  function expensiveTask(num) {
    console.log("Running expensive task...")
    for (let i = 0; i < 1e9; i++) {} // heavy work simulation
    return num * 2
  }

  // seMemo to cache result based on `input`
  const doubleValue = useMemo(() => {
    return expensiveTask(input)
  }, [input]) // only recalculates when `input` changes

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div>
        <p>Count: {count}</p>
      </div>

      <div>
        <input
          type="number"
          placeholder='Enter a number'
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
      </div>

      <div>
        <p>Double: {doubleValue}</p>
      </div>
    </>
  )
}

export default App
