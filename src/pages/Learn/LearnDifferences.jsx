import { learningDifferencesRoutes } from '../../routeConfig'
import { Link } from 'react-router-dom'

const LearnDifferences = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      <h2>Learn Differences:</h2>
      <ul>
        {learningDifferencesRoutes.map((route) => (
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

export default LearnDifferences
