import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className='Header'>
      <ul className='Header__nav'>
        <li className='Header__item'>Menu</li>
        <li className='Header__item'>About</li>
        <li className='Header__item'>Contacts</li>
      </ul>
    </header>

  )
}