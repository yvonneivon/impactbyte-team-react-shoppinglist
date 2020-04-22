import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Beranda</Link>
            </li>
            <li>
                <Link to='/signin'>Signin</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
        </ul>
    );
};

export default Navigation;
