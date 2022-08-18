import React, { useState, useEffect } from 'react';

import Offline from './Offline.jsx';
import Online from './Online.jsx';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const onConnectionChange = (e) => {
    setStatus({ status: e.type });
  };

  useEffect(() => {
    window.addEventListener('offline', onConnectionChange);
    return () => window.removeEventListener('offline', onConnectionChange);
  });

  useEffect(() => {
    window.addEventListener('online', onConnectionChange);
    return window.removeEventListener('online', onConnectionChange);
  });

  if (status === 'online') {
    return <Online />;
  }
  return <Offline />;
};
export default ConnectionStatus;
