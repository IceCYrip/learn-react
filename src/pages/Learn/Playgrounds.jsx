import { playgroundRoutes } from '../../routeConfig'
import { Link } from 'react-router-dom'

const Playgrounds = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      <h2>Playgrounds:</h2>
      <ul>
        {playgroundRoutes.map((route) => (
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

export default Playgrounds
