import { Route, Routes } from 'react-router-dom'
import  Userapp from './pages/user-ui'
import  Adminapp  from './pages/admin-ui'

function App() {
  return (
    <Routes>
      <Route excat path='/' element={<Userapp />} />
      <Route excat path='/admin' element={<Adminapp />} />
    </Routes>

  )
}

export default App