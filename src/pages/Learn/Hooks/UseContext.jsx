// This component demonstrates how to use the `useContext` hook in React.
// It allows a user to input their name, save it to a shared context using `setUserName`, and clear it.
// The `useUserContext` hook provides access to the context, while the `Name` component likely displays the shared name.

import { useState } from 'react'
import { useUserContext } from '../../../components/useContext/UserContext'

const UseContext = () => {
  const { setUserName } = useUserContext()
  const [nameField, setNameField] = useState('')

  return (
    <>
      <title>Learn Hooks - useContext</title>

      <h1>useContext Hook</h1>
      <h3>This is an example for understanding useContext hook in react</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: '30px',
        }}
      >
        <input
          type='text'
          value={nameField}
          placeholder='Enter your name'
          onChange={(e) => setNameField(e.target.value)}
        />
        <button onClick={() => setUserName(nameField)}>Save</button>
        <button onClick={() => setUserName('')}>Clear name</button>
      </div>
    </>
  )
}

export default UseContext
