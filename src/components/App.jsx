import React, { Component } from 'react';
import { Counter } from './Counter';
import { Timer } from './Timer';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={appStyles}>
      <Counter />
      {/* <Timer /> */}
    </div>
  );
};
