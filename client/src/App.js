import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState('');

  const handleButtonClick = (val) => {
    setValue(value + val);
    setDisplay(value + val)
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/math', { input: value });
      setDisplay(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClear = () => {
    setDisplay('');
    setValue('');
  }

  return (
    <div>
      <div className="rounded-box">
        <p className="display">{display}</p>
      </div>
      <div className="grid-container">
        <button onClick={() => handleButtonClick('(')} className="grid-button">(</button>
        <button onClick={() => handleButtonClick(')')} className="grid-button">)</button>
        <button onClick={() => handleButtonClick('/100')} className="grid-button">%</button>
        <button onClick={() => handleClear()} className="grid-button">Clear</button>

        <button onClick={() => handleButtonClick('7')} className="grid-button">7</button>
        <button onClick={() => handleButtonClick('8')} className="grid-button">8</button>
        <button onClick={() => handleButtonClick('9')} className="grid-button">9</button>
        <button onClick={() => handleButtonClick('/')} className="grid-button">÷</button>

        <button onClick={() => handleButtonClick('4')} className="grid-button">4</button>
        <button onClick={() => handleButtonClick('5')} className="grid-button">5</button>
        <button onClick={() => handleButtonClick('6')} className="grid-button">6</button>
        <button onClick={() => handleButtonClick('*')} className="grid-button">×</button>

        <button onClick={() => handleButtonClick('1')} className="grid-button">1</button>
        <button onClick={() => handleButtonClick('2')} className="grid-button">2</button>
        <button onClick={() => handleButtonClick('3')} className="grid-button">3</button>
        <button onClick={() => handleButtonClick('-')} className="grid-button">−</button>
        
        <button onClick={() => handleButtonClick('0')} className="grid-button">0</button>
        <button onClick={() => handleButtonClick('.')} className="grid-button">.</button>
        <button onClick={handleSubmit} className="grid-button">=</button>
        <button onClick={() => handleButtonClick('+')} className="grid-button">+</button>
      </div>
    </div>
  );
}

export default App;
