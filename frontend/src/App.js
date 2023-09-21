// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import InputForm from './components/inputform/InputForm';
import NumberList from './components/numberlist/NumberList';
import axios from 'axios';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  // To add the number in server list
  const updateNumbers = async (value) => {
    try {
      if (value) {
        const response = await axios.post(`http://localhost:3001/api/numbers`, {
          value: Number(value),
        });
        setNumbers(response.data.outputArray);
      }
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  // To fetch the number list from server
  const getNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/numbers`);
      setNumbers(response.data.outputArray);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <div className="App">
      <InputForm handleSubmit={updateNumbers} />
      <div className="result-container">
        <NumberList
          title="Expected Result 1"
          list={numbers}
          className="expected-result1"
        />
        <NumberList
          title="Expected Result 2"
          list={numbers}
          className="expected-result2"
        />
        <NumberList
          title="Expected Result 3"
          list={numbers}
          className="expected-result3"
        />
      </div>
    </div>
  );
};

export default App;
