import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className={tailwind.navbar}>
      <h1 className={tailwind.title}>
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

const tailwind = {
  navbar: 'bg-black w-full mb-12 p-3 shadow-2xl',
  title: 'text-3xl text-white',
};

export default Navbar;
