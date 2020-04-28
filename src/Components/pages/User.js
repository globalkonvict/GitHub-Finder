import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../users/Repos';

class User extends Component {
  state = {
    repos: null,
  };
  async componentDidMount() {
    await this.props.getSingleUser(this.props.match.params.login);
    await this.props.getRepos(this.props.user.repos_url);
  }

  render() {
    const {
      bio,
      avatar_url,
      name,
      followers,
      following,
      public_repos,
      location,
      html_url,
      id,
      company,
      blog,
    } = this.props.user;
    return (
      <>
        <Link to='/' className='text-white'>
          <div className='w-full h-12 border-2 bg-black flex items-center justify-center my-10'>
            Back
          </div>
        </Link>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='flex items-center flex-col border-2 p-6'>
            <img className='rounded-full w-40' src={avatar_url} alt='avatar' />
            <h1 className='text-2xl'>{name}</h1>
            <strong className='p-2 m-2'>Location: {location}</strong>
            <div className='flex flex-row'>
              <strong className='bg-red-700 p-2 m-2 rounded text-white'>
                Followers: {followers}
              </strong>
              <strong className='bg-red-700 p-2 m-2 rounded text-white'>
                Following: {following}
              </strong>
              <strong className='bg-red-700 p-2 m-2 rounded text-white'>
                Repos: {public_repos}
              </strong>
            </div>
          </div>
          <div className='border-2 p-6'>
            <div className='flex items-center flex-col p-6'>
              <h1 className='text-2xl self-start'>Bio</h1>
              {bio && <p>{bio}</p>}
              {!bio && <p>User doent have a Bio.</p>}
            </div>
            <div className='flex justify-start flex-col  p-6 mt-4'>
              <strong className=''>ID: {id}</strong>
              <strong className=''>Company: {company}</strong>
              <strong className=''>Blog: {blog}</strong>
              <a
                className='bg-black text-white p-4 px-10 mt-4 self-center'
                href={html_url}>
                Visit Github
              </a>
            </div>
          </div>
        </div>
        {this.props.repos && <Repos repos={this.props.repos} />}
      </>
    );
  }
}

export default User;
