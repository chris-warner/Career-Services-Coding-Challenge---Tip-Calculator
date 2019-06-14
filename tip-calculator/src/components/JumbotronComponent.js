import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import background from '../assets/images/tip.jpeg';

function JumbotronComponent() {
    return(
        <Jumbotron style={jumbostronStyle}>
        </Jumbotron>
    );
}

const jumbostronStyle = {
    height: '200px',
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    marginLeft:'20px',
    marginRight:'20px'
}

export default JumbotronComponent;