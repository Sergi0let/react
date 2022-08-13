import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleTaskCreate}
          className="btn create-task__btn"
        >
          Create
        </button>
      </div>
    );
  }
}

// const CreateTaskInput = () => {
//   return (
//     <div className="create-task">
//       <input className="create-task__input" type="text" />
//       <button className="btn create-task__btn">Create</button>
//     </div>
//   );
// };

export default CreateTaskInput;

/*
1. Take text from input
2. Create task with this text
3. Add created to the list 
*/
