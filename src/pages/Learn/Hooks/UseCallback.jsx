// This example demonstrates memoization in React.

//NOTE: Please use console log to observe this behaviour

//We have 2 functions here. One defined as handleClickNormally and other defined as handleClickWithUseCallback (using useCallback).

//We use a child component Button to understand the difference between the 2 functions here. We render the Button compoent 2 times, one with handleClickNormally and other with handleClickWithUseCallback

//When we update the state, by default react re-renders the component, thus re-creating the normally declared function and even though the child component Button is wrapped in React.memo, it understands that it is getting a new input and hence re-renders.

//To avoid this issue, we use useCallback, which is used to memoize a function. It checks whether the dependencies have changed or not. If yes, then it creates a new function only then, else it uses the old memoized function thus saving us from unnecessary re-renders

import React, { useCallback, useState } from 'react'
import BackButton from '../../../components/BackButton'
import Name from '../../../components/useContext/Name'

const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering: ${label}`)
  return <button onClick={onClick}>{label}</button>
})

export default function UseCallback() {
  const [count, setCount] = useState(0)

  const handleClickNormally = () => {
    console.log('Clicked Normally!')
  }

  const handleClickWithUseCallback = useCallback(() => {
    console.log('Clicked with useCallback!')
  }, [])

  return (
    <>
      <title>Learn Hooks - useCallback</title>
      <BackButton />
      <Name />
      <h1>useCallback Hook</h1>
      <h3>This is an example for understanding useCallback hook in react</h3>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: '15px',
          marginTop: '30px',
        }}
      >
        <Button
          onClick={handleClickWithUseCallback}
          label='Click me with callback'
        />
        <Button onClick={handleClickNormally} label='Click me normally' />
      </div>
    </>
  )
}
