import { Route, Routes } from 'react-router-dom'
import Home from "./Views/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Biografia from './Views/Biografia/Biografia'
import Noticias from './Views/Noticias/Noticias'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/biografia" element={<Biografia/>} />
        <Route path="/noticias" element={<Noticias/>} />

      </Routes>
    </div>
  )
}

export default App