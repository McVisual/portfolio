import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return(
        <div className="topnav">
                <li>Jimmy Yoon</li>
                <div className="top-right">
                    <li>Projects</li>
                    <li>About Me</li>
                    <li>Blog</li>
                </div>
        </div>
    );
}

export default NavBar;