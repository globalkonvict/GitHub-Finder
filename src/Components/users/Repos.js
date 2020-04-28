import React from 'react';

function Repos({ repos }) {
  return (
    <div className='flex flex-col mt-12 h-64'>
      <div className='border-2'>
        <h1 className='text-xl'>Repos</h1>
      </div>
      <div className=' '>
        {repos.map(({ html_url, id, full_name }) => (
          <div className='border-blue-500 border-2 p-2 my-6' key={id}>
            <a href={html_url}>{full_name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Repos;
