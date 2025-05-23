import UseState from './pages/Learn/Hooks/UseState'
import UseReducer from './pages/Learn/Hooks/UseReducer'
import UseCallback from './pages/Learn/Hooks/UseCallback'
import UseMemo from './pages/Learn/Hooks/UseMemo'
import UseEffect from './pages/Learn/Hooks/UseEffect'
import UseContext from './pages/Learn/Hooks/UseContext'
import Stopwatch from './pages/Mini Apps/Stopwatch App/Stopwatch'
import UseStatevsUseRef from './pages/Learn/Differences/UseStatevsUseRef'
import ChangeButtonColors from './pages/Playground/ChangeButtonColors'

export const learningHookRoutes = [
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
export const learningDifferencesRoutes = [
  {
    element: <UseStatevsUseRef />,
    path: '/learn/use-state-vs-use-ref',
    button_text: 'useState vs useRef',
  },
]
export const playgroundRoutes = [
  {
    element: <ChangeButtonColors />,
    path: '/playground/change-button-colors',
    button_text: 'Change Button Colors (with useRef)',
  },
]

export const appRoutes = [
  {
    element: <Stopwatch />,
    path: '/learn/stopwatch',
    button_text: 'Stopwatch App',
  },
]
