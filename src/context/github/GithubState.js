import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './GithubReducer';
import { GET_USER, GET_REPOS, SET_LOADING, SEARCH_USERS } from '../types';

const GithubState = (props) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUser = async (text) => {
    setLoading();
    const request = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: request.data.items });
  };

  const getSingleUser = async (username) => {
    const request = await axios.get(
      `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER, payload: request.data });
  };

  const getRepos = async (url) => {
    const repos = await axios.get(
      `${url}?per_page=5&created:asc?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const repoList = await repos.data;
    dispatch({ type: GET_REPOS, payload: [...repoList] });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUser,
        getSingleUser,
        getRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
