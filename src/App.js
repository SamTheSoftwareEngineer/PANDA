import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.js'
import LoginForm from './Components/LoginForm/LoginForm'
import RegisterForm from './Components/Register/RegisterForm'
import Navbar from './Components/Nav/Navbar/Navbar'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path='login' element={<LoginForm/>}/>
                <Route path='register' element={<RegisterForm/>}/>
            </Route>
        </Routes>
    )
}

export default App
