// This simple React component demonstrates the use of the `useState` hook to manage a 'counter' state.
// It shows how to increment and decrement a counter using buttons, helping beginners understand state updates in React.
//NOTE: Check console log to notice that whenever a state is updated, it re-renders the component.

import { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0)

  console.log('Component Rendered')

  return (
    <>
      <title>Learn Hooks - useState</title>

      <h1>useState Hook</h1>
      <h3>This is an example for understanding useState hook in react</h3>
      <h4>Counter: {counter}</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: '15px',
        }}
      >
        <button
          style={{ width: '175px' }}
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Add
        </button>
        <button
          style={{ width: '175px' }}
          onClick={() => setCounter((prev) => (prev <= 0 ? prev : prev - 1))}
        >
          Subtract
        </button>
        {/* <button style={{ width: '175px' }}>Go to Home page</button> */}
      </div>
    </>
  )
}

export default UseState
