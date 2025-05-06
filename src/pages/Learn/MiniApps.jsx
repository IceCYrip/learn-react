import React from 'react'
import { appRoutes } from '../../routeConfig'
import { Link } from 'react-router-dom'

const MiniApps = () => {
  return (
    <div style={{ textAlign: 'start', marginTop: '75px' }}>
      <h2>Mini Application:</h2>
      <ul>
        {appRoutes.map((route) => (
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

export default MiniApps
