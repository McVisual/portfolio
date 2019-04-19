import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return(
        <div>
            <Navbar>
                <Navbar.Brand href="#">Jimmy Yoon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        </div>
    );
}

export default NavBar;