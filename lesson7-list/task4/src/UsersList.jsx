import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  state = {
    usersList: [
      {
        id: 'id-0',
        age: 21,
        name: 'Bob',
      },
      {
        id: 'id-1',
        age: 17,
        name: 'Tom',
      },
      {
        id: 'id-2',
        age: 18,
        name: 'Tad',
      },
      {
        id: 'id-3',
        age: 45,
        name: 'Justin',
      },
      {
        id: 'id-4',
        age: 45,
        name: 'Franklin',
      },
      {
        id: 'id-5',
        age: 45,
        name: 'John',
      },
      {
        id: 'id-6',
        age: 45,
        name: 'Andrew',
      },
      {
        id: 'id-7',
        age: 45,
        name: 'Pol',
      },
      {
        id: 'id-8',
        age: 45,
        name: 'Ron',
      },
      {
        id: 'id-9',
        age: 45,
        name: 'Harry',
      },
      {
        id: 'id-10',
        age: 45,
        name: 'Anna',
      },
    ],
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
    const lastUserIndex = this.state.currentPage * this.state.itemsPerPage;
    const firstUserIndex = lastUserIndex - this.state.itemsPerPage;
    const currentUsers = this.state.usersList.slice(
      firstUserIndex,
      lastUserIndex
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
          {currentUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
