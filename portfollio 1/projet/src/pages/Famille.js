import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Notfound = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Erreur 404</h1>
        </div>
    );
};

export default Notfound;