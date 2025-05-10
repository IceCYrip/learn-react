import React from 'react'
import { learningHookRoutes } from '../../routeConfig'
import { Link } from 'react-router-dom'

const LearnHooks = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      <h2>Learn Hooks:</h2>
      <ul>
        {learningHookRoutes.map((route) => (
          <li
            key={route.path}
            style={{ fontSize: '18px', width: 'max-content' }}
          >
            <Link to={route.path}>{route.button_text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LearnHooks
