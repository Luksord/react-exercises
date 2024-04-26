import React, { Component, useState } from 'react';
import { Counter } from './module3/Counter';
import { Counter2 } from './module3/Counter';
import { Timer } from './module3/Timer';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  const [step, setStep] = useState(5);

  return (
    <div style={appStyles}>
      <input
        value={step}
        onChange={event => setStep(Number(event.target.value))}
      />
      <Counter2 initialValue={0} step={step} />
      {/* <Timer /> */}
    </div>
  );
};

export default App;
