import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './Components/users/Users';
import Navbar from './Components/layout/Navbar';
import './App.css';
import User from './Components/pages/User';
import GithubState from './context/github/GithubState';

const App = () => {
  return (
    <>
      <GithubState>
        <Navbar />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Users} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </Router>
        </div>
      </GithubState>
    </>
  );
};

export default App;
