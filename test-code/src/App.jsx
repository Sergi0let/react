import React from 'react';

import Clock from './Clock.jsx';

import './index.scss';

const App = () => {
  return (
    <>
      <Clock offset={0} location="Kyiv" />
    </>
  );
};

export default App;
