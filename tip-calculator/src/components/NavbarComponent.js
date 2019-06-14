import React from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';

function NavbarComponent(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default NavbarComponent