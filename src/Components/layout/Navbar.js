import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='w-full bg-gray-900 mb-12 p-1 px-3 shadow-2xl'>
      <h1 className="text-4xl text-white">
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fa fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
