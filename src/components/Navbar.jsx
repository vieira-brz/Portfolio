import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
    return (
        <header className='header flex items-center'>
            <NavLink to='/'>
                <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    Sobre
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    Projetos
                </NavLink>
                <NavLink to='/certificates' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    Certificados
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;