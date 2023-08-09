import React from 'react';
import './Product.scss';

export const Product = ({ product, onDecrement, onIncrement, onDelete, onAdded }) => {
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
  const handleClickOrder = () => {
    const orderProd = count;
    onAdded(id, orderProd);
  }

  return (
    <div className='Product'>
      <h2 style={{ color: color }} className='Product__title'>{name}</h2>

      <div className="Product__price">
        Price:{price}

        <dl className="counter-wrapper">
          <dt>count</dt>
          <dd>
            <button
              className="decrement"
              onClick={handleClickDecr}
            >
              -
            </button>
            <span className="count">{count}</span>
            <button
              className="increment"
              onClick={handleClickIncr}
            >
              +
            </button>
           
            <button
              className="add"
              onClick={handleClickOrder}
            >
              Order
            </button>
          </dd>
        </dl>
      </div>



      <div className="amount-wrapper">
        <span className="label">amount:</span>
        <span className="amount">{calculateAmount()}</span>
      </div>

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