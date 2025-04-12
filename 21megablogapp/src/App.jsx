import './App.css'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'



function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false));
  }, [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-50 dark:bg-gray-900'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    ) : null

  return (
    <>
      <h1>A Blog App with AppWrite !!</h1>

    </>
  )
}

export default App
