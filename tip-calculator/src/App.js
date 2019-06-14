import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import TipCalculatorForm from './components/TipCalculatorForm';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavbarComponent title={'Tip Calculator'} />
    <TipCalculatorForm  />
    </div>
  );
}

const navStyle = {
  //height:'80px',
  backgroundColor:'blue'
}

export default App;
