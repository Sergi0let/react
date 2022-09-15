import React, { Component } from 'react';

import Pagination from './Pagination.jsx';
import User from './User.jsx';

const itemsPerPage = 3;

class UsersList extends Component {
  state = {
    currentPage: 1,
  };

  goPrev = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  goNext = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  render() {
    const { users } = this.props;
    const { currentPage } = this.state;

    const lastListIndex = currentPage * itemsPerPage;
    const currentUsersList = users.slice(
      lastListIndex - itemsPerPage,
      lastListIndex
    );

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
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
