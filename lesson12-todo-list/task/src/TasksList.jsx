import React from 'react';
import PropTypes from 'prop-types';

import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import {
  fetchTasksList,
  createTask,
  updateTask,
  deleteTask,
} from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) => this.setState({ tasks: tasksList }));
  };

  onCreate = (text) => {
    // server link
    // 1. Create task object
    // 2. Post object to server
    // 3. Fetch list from server

    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTasksStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTasksStatusChange}
            />
          ))}
        </ul>
      </main>
    );
  }
}
TasksList.propTypes = {
  fetchTasksList: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TasksList;
