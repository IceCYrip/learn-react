import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  appRoutes,
  learningDifferencesRoutes,
  learningHookRoutes,
} from './routeConfig'
import { UserContextProvider } from './components/useContext/UserContext.jsx'
import Name from './components/useContext/Name.jsx'
import BackButton from './components/BackButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Name />
        <BackButton />
        <Routes>
          {/* Home Route */}
          <Route element={<App />} path='/' />

          {/* Learning Hook Routes */}
          {learningHookRoutes.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
          {/* Learning Differences Routes */}
          {learningDifferencesRoutes.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}

          {/* Mini App Routes */}
          {appRoutes.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
)
