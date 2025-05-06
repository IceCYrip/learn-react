import React, { useContext } from 'react'
import { UserContext } from './UserContext'
const Name = () => {
  const { userName } = useContext(UserContext)
  return (
    <>
      {!!userName && (
        <h3 style={{ position: 'fixed', top: 20, right: 20, margin: 0 }}>
          Hello, {userName}
        </h3>
      )}
      <div className='bottom-center'>Developed by Karan Sable</div>
    </>
  )
}

export default Name
