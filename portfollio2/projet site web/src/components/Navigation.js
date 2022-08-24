import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/circuits">
                    <li>circuits</li>
                </NavLink>
                <NavLink to="/evasion">
                    <li>Evasion</li>
                </NavLink>
                <NavLink to="/famille">
                    <li>Famille</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/destination">
                    <li>Destination</li>
                </NavLink>

            </ul>
        </nav>
    );
};

export default Navigation;