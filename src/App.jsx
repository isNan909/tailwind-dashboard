import { Route, Routes } from 'react-router-dom'
import  Userapp from './pages/user-ui'
import  Adminapp  from './pages/admin-ui'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Userapp />} />
      <Route path='/admin' element={<Adminapp />} />
    </Routes>

  )
}

export default App