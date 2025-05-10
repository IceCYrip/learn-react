/**
 * This React component demonstrates the use of the `useReducer` hook to manage
 * and manipulate a numeric state using various actions like add, subtract, square,
 * multiply by 10, and divide by 10. It displays a number and renders buttons for
 * each operation. When a button is clicked, the corresponding action is dispatched
 * to update the number accordingly. The reducer function handles logic for each action.
 */

import { useReducer } from 'react'

const UseReducer = () => {
  const numReducer = (state, action) => {
    switch (action) {
      case '+':
        return state + 1
      case '-':
        return state == 0 ? state : state - 1
      case 'square':
        return state == 0 ? state : state * state

      case '/ 10':
        return state / 10
      case '* 10':
        return state * 10
      default:
        console.log('Invalid action type for num reducer')
        return state
    }
  }
  const [num, numDispatcher] = useReducer(numReducer, 0)

  const actionButtons = [
    { label: 'Add', action: '+' },
    { label: 'Subtract', action: '-' },
    { label: 'Square', action: 'square' },
    { label: 'Multiply by 10', action: '* 10' },
    { label: 'Divide by 10', action: '/ 10' },
  ]

  return (
    <>
      <title>Learn Hooks - useReducer</title>

      <h1>useReducer Hook</h1>
      <h3>This is an example for understanding useReducer hook in react</h3>
      <h4>Number: {num}</h4>
      <div
        style={{ display: 'flex', justifyContent: 'center', columnGap: '15px' }}
      >
        {actionButtons.map((button) => (
          <button
            key={button.label}
            onClick={() => numDispatcher(button.action)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </>
  )
}

export default UseReducer
