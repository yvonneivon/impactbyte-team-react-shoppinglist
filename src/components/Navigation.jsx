import React from "react";
import { NavLink } from "react-router-dom";
import "./css/navigation.css"

const Navigation = () => {
    return (
        <ul id="Nav_menu">
            <li>
                <NavLink to="/"

                >Beranda
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signin"
                    className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                >Sign
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signup"
                    className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                >Sign up
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/shoppinglist"
                    className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{ color: 'teal' }}
                >Shopping List
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;