import React from 'react';
import TipCalculatorForm from './components/TipCalculatorForm';
import JumbotronComponent from './components/JumbotronComponent';
import './App.css';

function App() {
  return (
    <div style={AppDivStyle} className="App">
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
  margin:'auto',
  marginTop:'8px'
}



export default App;
