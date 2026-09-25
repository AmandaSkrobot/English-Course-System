
import MainPage from './components/MainPage/MainPage'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import './App.css'
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<MainPage/>}>
        <Route index element={<Home/>} />
        <Route path = "/sobre" element = {<About/>}/>
        <Route path = "/cadastrar" element = {<SignUp/>}/>
        <Route path = "/entrar" element = {<SignIn/>}/>
      </Route>   
   </Routes>
    </BrowserRouter>
  )
}

export default App
