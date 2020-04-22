import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to='/signin'>Sign in</Link>
            </li>
            <li>
                <Link to='/signup'>Sign up</Link>
            </li>
        </ul>
    );
};

export default Navigation;
