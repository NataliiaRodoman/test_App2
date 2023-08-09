import React from 'react';
import { Product } from '../Product/Product';
import './ProductsList.scss';

export const ProductsList = ({ products = [], onDecrement, onIncrement, onDelete, onAdded }) => {
  return(
    <ul className="Products">
        {products.map((product) => (
          <li key={product.id}>
            <Product
              product={product}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onDelete={onDelete}
              onAdded={onAdded}
            />
          </li>
        ))}
    </ul> 
  )
}

export default ProductsList;