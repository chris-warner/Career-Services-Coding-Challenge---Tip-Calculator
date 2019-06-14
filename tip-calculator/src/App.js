import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import TipCalculatorForm from './components/TipCalculatorForm';
import JumbotronComponent from './components/JumbotronComponent';
import './App.css';

function App() {
  return (
    <div style={AppDivStyle} className="App">
    <NavbarComponent title={'Tip Calculator'} />
    <JumbotronComponent />
    <p style={descriptionP}>Tip Calculator is a simple application that will help calculate a tip at a restaurant for your server.</p>
    <TipCalculatorForm  />
    </div>
  );
}

const descriptionP = {
  marginLeft:'18px',
  marginRight:'18px'
}

const AppDivStyle = {
  maxWidth:'900px',
  display: 'block',
  margin:'auto'
}

export default App;
