import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Users from './Components/users/Users';
import Navbar from './Components/layout/Navbar';
import './App.css';
import User from './Components/pages/User';

class App extends Component {
  state = {
    user: {},
    loading: false,
    repos: null,
  };

  getSingleUser = async (username) => {
    const request = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: request.data });
  };

  searchUser = async (text) => {
    this.setState({ loading: true });
    const request = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: request.data.items, loading: false });
  };

  getRepos = async (url) => {
    const repos = await axios.get(
      `${url}?per_page=5&created:asc?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );
    const repoList = await repos.data;
    await this.setState({ repos: repoList });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Users
                  users={this.state.users}
                  loading={this.state.loading}
                  searchUser={this.searchUser}
                />
              </Route>
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getSingleUser={this.getSingleUser}
                    user={this.state.user}
                    repos={this.state.repos}
                    getRepos={this.getRepos}
                  />
                )}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
