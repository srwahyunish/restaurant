import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <Link className="navbar-brand text-white" to="/#">FoodParadise</Link>
    </nav>
);

export default Navbar;