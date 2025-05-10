import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const routeTo = useNavigate()

  const pathName = window.location.pathname

  if (pathName === '/') return null

  return (
    <button
      style={{ width: '100px', position: 'fixed', top: 20, left: 20 }}
      onClick={() => routeTo('/')}
    >
      Go back
    </button>
  )
}

export default BackButton
