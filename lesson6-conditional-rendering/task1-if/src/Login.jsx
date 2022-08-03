import React from 'react';

const Login = (props) => {
  return (
    <button className="btn login" onClick={props.onClick}>
      Login
    </button>
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
