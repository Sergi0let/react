import React, { Component } from 'react';

import Pagination from './Pagination.jsx';
import User from './User.jsx';

import { users } from './data.js';

class UsersList extends Component {
  state = {
    usersList: users,
    currentPage: 1,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  goNext = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  render() {
    const lastListIndex = this.state.currentPage * this.state.itemsPerPage;
    const currentUsersList = this.state.usersList.slice(
      lastListIndex - this.state.itemsPerPage,
      lastListIndex
    );

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.state.usersList.length}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {currentUsersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
