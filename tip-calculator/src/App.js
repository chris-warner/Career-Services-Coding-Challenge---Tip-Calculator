import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import TipCalculatorForm from './components/TipCalculatorForm';
import JumbotronComponent from './components/JumbotronComponent';
import './App.css';

function App() {
  return (
    <div className="App">
    <JumbotronComponent />
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
