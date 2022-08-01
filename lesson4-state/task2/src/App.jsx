import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="New York" offset={12} />
      <Clock location="Kyiv" offset={0} />
      <Clock location="London" offset={1} />
    </>
  );
};

export default App;
