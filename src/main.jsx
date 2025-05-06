import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { appRoutes, learningRoutes } from './routeConfig'
import { UserContextProvider } from './components/useContext/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          {/* Home Route */}
          <Route element={<App />} path='/' />

          {/* Learning Routes */}
          {learningRoutes.map((route) => (
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
