import React from 'react';
import {BrowserRouter,Route, Routes,NavLink} from 'react-router-dom'


const Header = () => {
    return (
        
        <>
        <nav>
        <NavLink to='/crear-cuenta'>Registrarse</NavLink>
        </nav>
        
        </>
        
        );
}
 
export default Header;