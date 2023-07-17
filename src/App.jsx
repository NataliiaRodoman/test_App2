import React from 'react';
import { Header } from './components/Header';
import './App.scss';
import { useState } from 'react';
import { ProductsList } from './components/ProductsList/ProductsList';
import { TotalAmount } from './components/TotalAmount/TotalAmount';
import { Footer } from './components/Footer/Footer';

// use the following CRUD API https://640f0073cde47f68db3e614c.mockapi.io/api/v1/cart

const initialState = [
  { id: 4, price: 100, name: "peperoni pizza", count: 10, color: '#f00' },
  { id: 1, price: 150, name: "chis pizza", count: 120, color: '#00f' },
  { id: 3, price: 180, name: "new pizza", count: 20, color: '#080' },
  { id: 2, price: 190, name: "tomatos pizza", count: 30, color: '#08f' }
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
  const [value, setValue] = useState(5);
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState(initialState);

  const hendleIncrement = (itemId) => {
    setProducts((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const hendleDecrenemt = (itemId) => {
    setProducts((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
   };

  const handleClickDelete = (itemId) => {
    setProducts((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  let visibleGoods = getPreparedGoods(products, { sortField, query });
  
  //useEffect(() => {
    // fetch("https://640f0073cde47f68db3e614c.mockapi.io/api/v1/cart")
    //   .then((response) => response.json())
    //   .then((data) => setItems(data))
    //   .catch((error) => console.error(error));
  //}, []);

  return (
    <div className='App'>
      <h1>May shop</h1>

      <Header />

      <ProductsList
        products={visibleGoods}
        onDecrement={hendleDecrenemt}
        onIncrement={hendleIncrement}
        onDelete={handleClickDelete}
      />

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