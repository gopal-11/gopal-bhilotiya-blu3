import './index.css';

import { useState } from 'react';
const InputForm = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <div className="form-container">
      <h1>Fizz Buzz App</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => handleSubmit(value)}
        style={{ marginLeft: '10px' }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputForm;
