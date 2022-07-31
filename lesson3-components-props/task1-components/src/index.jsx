import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';

import './index.scss';
import './search.scss';

const rootElement = document.querySelector('#root');

// const Search = (props) => {
//   console.log(props);
//   const elements = (
//     <div className="search">
//       <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
//       <div className="search__field">
//         <input type="text" className="search__input" />
//         <button className="search__button">Search</button>
//       </div>
//     </div>
//   );
//   return elements;
// };
ReactDOM.render(<Search name="Bob" />, rootElement);
