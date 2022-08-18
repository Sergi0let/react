import React, { useState, useEffect } from 'react';

import Offline from './Offline.jsx';
import Online from './Online.jsx';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const onConnectionChange = (event) => {
      setStatus({ status: event.type });
      console.log(event.type);
    };
    window.addEventListener('online', onConnectionChange);
    window.addEventListener('offline', onConnectionChange);

    return (
      () => window.removeEventListener('online', onConnectionChange),
      () => window.removeEventListener('offline', onConnectionChange)
    );
  });

  if (status === 'online') {
    return <Online />;
  }

  return <Offline />;
};

export default ConnectionStatus;
