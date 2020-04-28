import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItems = ({ user: { login, avatar_url } }) => {
  return (
    <div className='flex flex-col items-center shadow-md center border rounded-sm px-4 py-8 m-4'>
      <img
        src={avatar_url}
        className='rounded-full mb-4'
        style={{ width: '80px' }}
        alt='avtar'
      />
      <h3>{login}</h3>
      <div className='mt-6'>
        <Link
          to={`/user/${login}`}
          className='text-white rounded shadow-sm bg-black px-8 py-2'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
