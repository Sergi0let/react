import React from 'react';
import Greeting from './Greeting.jsx';

const Login = (props) => {
  return (
    <>
      <Greeting />
      <button className="btn login" onClick={props.onClick}>
        Login
      </button>
    </>
  );
};

// class Login extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       onLogin:
//     }
//   }
// }
export default Login;
