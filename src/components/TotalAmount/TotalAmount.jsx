import React from 'react';

export const TotalAmount = ({ products = [] }) => {
  const calculateTotalAmount = () => {
    return products.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  }

  return <h3>Total amount: {calculateTotalAmount()}</h3>;
};

export default TotalAmount;
