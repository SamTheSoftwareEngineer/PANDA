import { NavLink, Outlet } from "react-router-dom"
import './Navbar.scss'


const Navbar = () => {

    return (
        <>
            <div className="Navbar-container">
                <div className="Logo-container">
                    <NavLink to='/' className="Logo">Logo here</NavLink>
                </div>
                <div className="NavLink-container">
                    <NavLink className='NavLink' to='/login'>LOGIN</NavLink>
                    <NavLink className='NavLink' to='/register'>SIGNUP</NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar
