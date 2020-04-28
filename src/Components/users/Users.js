import React, { Component } from 'react';
import UserItems from './UserItems';
import spiner from '../../loading.gif';
import Search from '../layout/Search';

class Users extends Component {
  render() {
    return (
      <>
        <Search searchUser={this.props.searchUser} />
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {this.props.loading && <img src={spiner} alt='Spiner' />}
          {this.props.users &&
            this.props.users.map((user) => (
              <UserItems key={user.node_id} user={user} />
            ))}
        </div>
      </>
    );
  }
}

export default Users;
