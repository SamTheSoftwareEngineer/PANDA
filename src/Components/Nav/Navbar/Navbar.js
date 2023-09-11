import { NavLink, Outlet } from "react-router-dom"
import { ReactComponent as Logo } from "../../../Images/panda-new.svg"

import './Navbar.scss'


const Navbar = () => {

    return (
        <>
            <div className="Navbar-container">
                <div className="Logo-container">
                    <NavLink to='/' className="Logo"><Logo/></NavLink>
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
