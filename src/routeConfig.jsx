import UseState from './pages/Learn/Hooks/UseState'
import UseReducer from './pages/Learn/Hooks/UseReducer'
import UseCallback from './pages/Learn/Hooks/useCallback'
import UseMemo from './pages/Learn/Hooks/UseMemo'
import UseEffect from './pages/Learn/Hooks/UseEffect'
import UseContext from './pages/Learn/Hooks/UseContext'
import Stopwatch from './pages/Learn/Stopwatch App/Stopwatch'

export const learningRoutes = [
  {
    element: <UseState />,
    path: '/learn/use-state',
    button_text: 'Learn useState',
  },
  {
    element: <UseReducer />,
    path: '/learn/use-reducer',
    button_text: 'Learn UseReducer',
  },
  {
    element: <UseEffect />,
    path: '/learn/use-effect',
    button_text: 'Learn UseEffect',
  },
  {
    element: <UseMemo />,
    path: '/learn/use-memo',
    button_text: 'Learn useMemo',
  },
  {
    element: <UseCallback />,
    path: '/learn/use-callback',
    button_text: 'Learn useCallback',
  },
  {
    element: <UseContext />,
    path: '/learn/use-context',
    button_text: 'Learn useContext',
  },
]

export const appRoutes = [
  {
    element: <Stopwatch />,
    path: '/learn/stopwatch',
    button_text: 'Stopwatch App',
  },
]
