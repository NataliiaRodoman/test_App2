import React from 'react';
import { Header } from './components/Header';
import './App.scss';
import { useState } from 'react';
import { ProductsList } from './components/ProductsList/ProductsList';
import { TotalAmount } from './components/TotalAmount/TotalAmount';
import { Footer } from './components/Footer/Footer';

const initialState = [
  { id: 4, price: 100, name: "peperoni pizza", count: 0, color: '#f00' },
  { id: 1, price: 150, name: "chis pizza", count: 0, color: '#00f' },
  { id: 3, price: 180, name: "new pizza", count: 0, color: '#080' },
  { id: 2, price: 190, name: "tomatos pizza", count: 0, color: '#08f' }
];

function getPreparedGoods(goods, { sortField, query }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter(good => good.name.includes(query));
  }

  if (sortField) {
    preparedGoods.sort((goods1, goods2) => {
      switch (sortField) {
        //'id','name','color' треба винести в змінну /зроб об'єкт
        case 'id':
          return goods1.id - goods2.id;
        case 'name':
        case 'color':
          return goods1.color.localeCompare(goods2.color);
        default:
          return 0;
      }
    });
  }

  return preparedGoods;
}

export const App = () => {
  // const [products, setProducts] = useState(initialState);
  const [value, setValue] = useState(5);
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const visibleGoods = getPreparedGoods(
    initialState,
    { sortField, query }
  );

  const onIncrement = () => { };

  const onDecrement = () => { };

  const onDelete = () => { };

  return (
    <div className='App'>
      <h1>May shop</h1>

      <Header />

      <ProductsList products={visibleGoods} />

      <TotalAmount products={visibleGoods} />
     
      <button
        className='add'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        {value}
      </button>

      <Footer
        sortField={sortField}
        sortBi={setSortField}
        filterBi={(newQuery) => {
          setQuery(newQuery);
         }}
      />
      {/* sortBi={(field) => {
        console.log(field);
        setSortField(field);
      }} в фіелд буде стейт, який ми отримали від 
      дочірнього елемента*/}
    </div>
  )
}