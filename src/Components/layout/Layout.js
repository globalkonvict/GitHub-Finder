import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Search from './Search';

function Layout({ children, searchUser }) {
  return (
    <>
      <Navbar />
      <Router>
        <div className='container'>
          <Switch>{children}</Switch>
        </div>
      </Router>
    </>
  );
}

export default Layout;
