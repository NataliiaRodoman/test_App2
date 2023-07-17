import React from 'react';
import './Product.scss';

export const Product = ({ product }) => {
  const { name, price, count, color } = product;

  return (
    <div className='Product'>
      <h2 style={{ color: color }} className='Product__title'>{name}</h2>

      <div className="Product__price">
        Price:{price}

        <dl className="counter-wrapper">
          <dt>count</dt>
          <dd>
            {/* TODO: call onDecrement */}
            <button
              className="decrement"
            // onClick={() => {
            //   count = count - 1;
            // }}
            >
              -
            </button>
            {/* TODO: show count */}
            <span className="count">{count}</span>
            {/* TODO: call onIncrement */}
            <button
              className="increment"
            // onClick={() => {
            //   count = count + 1;
            // }}
            >
              +
            </button>
          </dd>
        </dl>
      </div>



      <div className="amount-wrapper">
        <span className="label">amount:</span>
        {/* TODO: calculate and show amount */}
        <span className="amount"></span>
      </div>

      {/* TODO: call onDeleteItem */}
      <button
        className="delete-item">
        x
      </button>
    </div>
  )
}

export default Product;