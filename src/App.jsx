
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Footerr from './components/Footerr'

function App() {

  return (
    <>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/:id/view' element={<View/>}/>
    </Routes>
   <Footerr/>

    </>
  )
}

export default App
