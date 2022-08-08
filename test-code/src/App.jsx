import React from 'react';

import Clock from './Clock.jsx';

import './index.scss';

const App = () => {
  return (
    <>
      <Clock offset={2} location="Kyiv" />
      <Clock offset={0} location="London" />
      <Clock offset={-5} location="London" />
    </>
  );
};

export default App;
