import React from 'react';
import { Product } from '../Product/Product';
import './ProductsList.scss';

export const ProductsList = ({products=[]}) => {
  return(
    <ul className="Products">
        {products.map((product) => (
           <li key={product.id}><Product product={ product }/></li>
        ))}
    </ul> 
  )
}

export default ProductsList;