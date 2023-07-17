import React from 'react';
import cn from 'classnames';
import './Footer.scss';

export const Footer = ({
  sortField,
  sortBi,
  filterBi,
}) => {
  return (
    <div className='Sort'>
      <button
        onClick={() => sortBi('')}
      >
        reset
      </button>

      <input
        type="text"
        onChange={(e) => {
          filterBi(e.target.value);
        }}
      />

      <label htmlFor="">sort by</label>

      <button
        onClick={() => sortBi('id')}
        className={cn({ active: sortField === 'id' })}
      >
        id
      </button>

      <button
        onClick={() => sortBi('name')}
        className={cn({ active: sortField === 'name' })}
      >
        name
      </button>

      <button
        onClick={() => sortBi('color')}
        className={cn({ active: sortField === 'color' })}
      >
        color
      </button>
    </div>
  )
}

export default Footer;