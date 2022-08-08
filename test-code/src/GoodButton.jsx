import React from 'react';

import './fancyButton.scss';

export default () => (
  <button className="fancy-button" onClick={() => alert('Good job!')}>
    Click me!
  </button>
);
