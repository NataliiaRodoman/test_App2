import React from 'react';
import './Product.scss';

export const Product = ({ product, onDecrement, onIncrement, onDelete }) => {
  const { name, price, count, color, id } = product;

  const handleClickIncr = () => {
    onIncrement(id);
  }
  const handleClickDecr = () => {
    onDecrement(id);
  }
  const handleClickDelete = () => {
    onDelete(id);
  }
  const calculateAmount = () => {
    return price * count;
  }

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
              onClick={handleClickDecr}
            >
              -
            </button>
            {/* TODO: show count */}
            <span className="count">{count}</span>
            {/* TODO: call onIncrement */}
            <button
              className="increment"
              onClick={handleClickIncr}
            >
              +
            </button>
          </dd>
        </dl>
      </div>



      <div className="amount-wrapper">
        <span className="label">amount:</span>
        {/* TODO: calculate and show amount */}
        <span className="amount">{calculateAmount()}</span>
      </div>

      {/* TODO: call onDeleteItem */}
      <button
        className="delete-item"
        onClick={handleClickDelete}
      >
        x
      </button>
    </div>
  )
}

export default Product;