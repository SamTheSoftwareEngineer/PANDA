import { NavLink, Outlet } from "react-router-dom"


const Navbar = () => {

    return (
        <div className="Navbar-container">
            <div>
                <NavLink to='/' className="Logo">Logo here</NavLink>
            </div>
            <NavLink to='/login'>LOGIN</NavLink>
            <NavLink to='/register'>SIGNUP</NavLink>
            <Outlet/>
        </div>
    )
}

export default Navbar
