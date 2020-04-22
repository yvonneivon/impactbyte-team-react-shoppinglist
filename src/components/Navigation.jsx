import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">Beranda</Link>
            </li>
            <li>
                <Link to="/mockapi">Mock API</Link>
            </li>
            <li>
                <Link to="/signin">Enter</Link>
            </li>
            <li>
                <Link to="/signup">Sign up</Link>
            </li>
        </ul>
    );
};

export default Navigation;