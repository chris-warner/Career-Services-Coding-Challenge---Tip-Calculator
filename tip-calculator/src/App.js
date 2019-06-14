import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={navStyle}>
        <ul>
          <il>Tip Calculator</il>
        </ul>
      </nav>
    </div>
  );
}

const navStyle = {
  //height:'80px',
  backgroundColor:'blue'
}

export default App;
