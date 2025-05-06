/**
 * This React component demonstrates the use of the `useState` and `useEffect` hooks.
 * It manages two separate counters and displays buttons to increment and decrement each.
 * Multiple `useEffect` hooks are used to show how dependencies affect when effects run:
 * - One runs only once on initial render.
 * - One runs when `counter1` updates.
 * - One runs when `counter2` updates.
 * - One runs on every render (no dependency array).
 * This setup helps illustrate how different `useEffect` configurations behave in real time.
 
 * NOTE: PLease check the console log to observe the behaviour
 **/

import React, { useState, useEffect } from 'react'
import BackButton from '../../../components/BackButton'
import Name from '../../../components/useContext/Name'

const UseEffect = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  //Runs only once, on first render as empty dependancy array is provided
  useEffect(() => {
    console.log(`You will see this message only on first render`)
  }, [])

  //Runs on first render and when 'counter1' state is updated as 'counter1' state is mentioned in dependancy array
  useEffect(() => {
    console.log('Counter 1 updated')
  }, [counter1])

  //Runs on first render and when 'counter2' state is updated as 'counter2' state is mentioned in dependancy array
  useEffect(() => {
    console.log('Counter 2 updated')
  }, [counter2])

  //Runs on EVERY render since no dependancy array is provided
  useEffect(() => {
    console.log('This will be logged on every render')
  })

  return (
    <>
      <title>Learn Hooks - useState</title>
      <BackButton />
      <Name />

      <h1>useState Hook</h1>
      <h3>This is an example for understanding useState hook in react</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: '100px',
        }}
      >
        <div>
          <h2
            style={{
              backgroundColor: 'whitesmoke',
              borderRadius: 12,
              padding: '10px 0px',
            }}
          >
            Counter 1 <br /> {counter1}
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              columnGap: '15px',
            }}
          >
            <button
              style={{ width: '175px' }}
              onClick={() => setCounter1((prev) => prev + 1)}
            >
              Add
            </button>
            <button
              style={{ width: '175px' }}
              onClick={() =>
                setCounter1((prev) => (prev <= 0 ? prev : prev - 1))
              }
            >
              Subtract
            </button>
          </div>
        </div>
        <div>
          <h2
            style={{
              backgroundColor: 'whitesmoke',
              borderRadius: 12,
              padding: '10px 0px',
            }}
          >
            Counter 2 <br /> {counter2}
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              columnGap: '15px',
            }}
          >
            <button
              style={{ width: '175px' }}
              onClick={() => setCounter2((prev) => prev + 1)}
            >
              Add
            </button>
            <button
              style={{ width: '175px' }}
              onClick={() =>
                setCounter2((prev) => (prev <= 0 ? prev : prev - 1))
              }
            >
              Subtract
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseEffect
