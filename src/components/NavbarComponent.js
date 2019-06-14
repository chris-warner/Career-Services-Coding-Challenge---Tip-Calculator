import React from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';

function NavbarComponent(props) {
    return (
        <div>
            <Navbar style={NavbarStyle} bg="light" expand="lg">
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            </Navbar>
        </div>
    );
}

const NavbarStyle = {
    marginLeft:'20px',
    marginRight:'20px'
}

export default NavbarComponent