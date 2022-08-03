import React from 'react';
import Online from './Online.jsx';

const Offline = (props) => {
  // console.log(props.isOnline);
  return (
    <>
      {props.isOnline ? (
        <Online />
      ) : (
        <span className="status__text">Offline</span>
      )}
    </>
  );
};

export default Offline;
