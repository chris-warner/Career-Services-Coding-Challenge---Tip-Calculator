import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import background from '../assets/images/dan-gold-105699-unsplash-blur.jpg';

function JumbotronComponent() {
    return(
        <Jumbotron style={jumbostronStyle}>
        <h2>Tip Calculator is a simple application that will help calculate a tip at a restaurant for your server.</h2>
        </Jumbotron>
    );
}

const jumbostronStyle = {
    height: '200px',
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover',
    color: 'white',
    marginLeft:'20px',
    marginRight:'20px'
}

export default JumbotronComponent;