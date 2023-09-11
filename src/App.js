import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.js'
import LoginForm from './Components/LoginForm/LoginForm'
import RegisterForm from './Components/Register/RegisterForm'
import RoutineForm from './Components/Routines/RoutineForm'
import RoutineList from './Components/Routines/RoutinePage.js'
import Navbar from './Components/Nav/Navbar/Navbar'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path='login' element={<LoginForm/>}/>
                <Route path='register' element={<RegisterForm/>}/>
                <Route path='routine' element={<RoutineForm/>}/>
                <Route path='routines' element={<RoutineList/>}/>
            </Route>
        </Routes>
    )
}

export default App
