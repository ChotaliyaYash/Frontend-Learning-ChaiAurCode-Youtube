import React from 'react'
import UserProvider from './context/UserProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
    return (
        <UserProvider>
            <Login />
            <Profile />
        </UserProvider>
    )
}

export default App