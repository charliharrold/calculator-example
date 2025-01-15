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

  return (
    <div>
      <div>
        {display}
      </div>
      <div className="grid-container">
      <button onClick={() => handleButtonClick('1')} className="grid-button">1</button>
      <button onClick={handleSubmit} className="grid-button">submit</button>
      </div>
    </div>
  );
}

export default App;
