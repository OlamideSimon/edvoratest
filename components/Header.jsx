import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { user } = useSelector(state => state.data)

  console.log(user)

  return (
    <div className='bg-gray-900 p-5 text-white flex justify-between'>
        <p className='text-3xl font-semibold'>Edvora</p>
        <div className='flex items-center space-x-2'>
          <p className='text-lg font-semibold'>{user.user?.name}</p>
          <Avatar src={user.user?.url} />
        </div>
    </div>
);
}

export default Header;
