import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="New York" offset={12} />
      <Clock location="Kyiv" offset={0} />
      <Clock location="London" offset={5} />
    </>
  );
};

export default App;
