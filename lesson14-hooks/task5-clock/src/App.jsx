import React, { useState } from 'react';
import Clock from './Clock.jsx';

import './index.scss';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button className="clock__time" onClick={() => setVisible(!visible)}>
        Hide/Show
      </button>
      {visible && (
        <>
          <Clock location="New York" offset={-5} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="London" offset={0} />
        </>
      )}
    </>
  );
};
export default App;
// export default class App extends React.Component {
//   state = {
//     visible: true,
//   };

//   toggleClock = () => {
//     this.setState({ visible: !this.state.visible });
//   };

//   render() {
//     return (
//       <>
//         <button className="clock__time" onClick={this.toggleClock}>
//           Hide/Show
//         </button>
//         {this.state.visible && (
//           <>
//             <Clock location="New York" offset={-5} />
//             <Clock location="Kyiv" offset={2} />
//             <Clock location="London" offset={0} />
//           </>
//         )}
//       </>
//     );
//   }
// }
