import React, { useContext } from 'react';
import UserItems from './UserItems';
import spiner from '../../loading.gif';
import Search from '../layout/Search';
import githubContext from '../../context/github/githubContext';

const Users = () => {
  const GithubContext = useContext(githubContext);
  const {loading, searchUser, users} = GithubContext;
  return (
    <>
      <Search searchUser={searchUser} />
      <div className={tailwind.grid}>
        {loading && <img src={spiner} alt='Spiner' className='mx-auto' />}
        {users &&
          users.map((user) => <UserItems key={user.node_id} user={user} />)}
      </div>
    </>
  );
};

const tailwind ={
  grid: 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
}

export default Users;
