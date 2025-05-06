// UserContext.js
import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('')

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}
