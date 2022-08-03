import React from 'react';

import Status from './Status.jsx';
import Online from './Online.jsx';

const Offline = (props) => {
  console.log(props.isOnline);
  return (
    <>
      {props.isOnline ? (
        <Online />
      ) : (
        <span className="status__text">Offline</span>
      )}
    </>
  );

  // return (

  //   <div className="status">
  //     <span className="status__text">Offline</span>
  //     <button  className="status__btn">
  //       Reconnect
  //     </button>
  //   </div>
  // );
};

export default Offline;
