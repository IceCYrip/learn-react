// This example demonstrates memoization in React.

// To observe its behavior, run the application and open the browser console.
// When you change the value of the counter, you’ll see that regular state and variable values update,
// but the memoized value remains unchanged unless its dependencies change.

import React, { useMemo, useState } from 'react'
import BackButton from '../../../components/BackButton'
import Name from '../../../components/useContext/Name'

const UseMemo = () => {
  const heavyCalculationsForState = () => {
    let value = 0
    for (let i = 0; i < 10; i++) {
      console.log('state calculation for i = ', i)
      value += i % 2 == 0 ? i : -i
    }
    return value
  }
  const heavyCalculationsForVariable = () => {
    let value = 0
    for (let i = 0; i < 10; i++) {
      console.log('variable calculation for i = ', i)
      value += i % 2 == 0 ? i : -i
    }
    return value
  }
  const heavyCalculationsForMemo = () => {
    let value = 0
    for (let i = 0; i < 10; i++) {
      console.log('memo calculation for i = ', i)
      value += i % 2 == 0 ? i : -i
    }
    return value
  }

  const calcuateValue = heavyCalculationsForVariable()
  const [calcuateStateValue] = useState(heavyCalculationsForState())
  const calcuateValuewithMemo = useMemo(() => heavyCalculationsForMemo(), [])

  const [counter, setCounter] = useState(0)

  return (
    <>
      <title>Learn Hooks - useMemo</title>

      <BackButton />
      <Name />

      <h1>useMemo Hook</h1>
      <h3>This is an example for understanding useMemo hook in react</h3>
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
      </div>
    </>
  )
}
export default UseMemo
