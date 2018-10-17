// node_modules
import React, { Component } from "react";

// components
import Search from './../../containers/Search/Search'

// stylesheets
import './Header.css'

// utils
import {showMenus} from './../../utils/menus'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand">
                    flickr
                </a>
                <ul className="navbar-nav">
                    {showMenus()}
                </ul>
                <Search />
            </nav>
        );
    }
}

export default Header;
