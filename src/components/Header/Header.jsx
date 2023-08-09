import React from 'react';
import { useState, useEffect } from 'react';

import './Header.scss';

export const Header = ({ order, visibleGoods, arrOrder }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const updatedSelectedItems = arrOrder.map((element) => {
      const selectedItem = visibleGoods.find(item => item.id === element);
      return selectedItem ? selectedItem : null;
    }).filter(item => item !== null);

    setSelectedItems(updatedSelectedItems);
  }, [arrOrder, visibleGoods]);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.count * item.price, 0);
  };

  return (
    <header className='Header'>
      <ul className='Header__nav'>
        <li className='Header__item'>Menu</li>
        <li className='Header__item'>About</li>
        <li className='Header__item'>Contacts</li>
      </ul>
      <div onClick={handleModalOpen} className='Header__basket'>{order}</div>
      {isModalVisible && (
        <div className='modal'>
          <div className='modal-content'>
            {selectedItems.map((item, index) => (
              <div key={index}>
                Назва: {item.name} Кількість: {item.count}, Ціна: {item.price} грн, Сума: {item.count * item.price} грн.;
              </div>
            ))}
            <div>
              Загальна сума замовлення: {calculateTotalPrice(selectedItems)} грн
            </div>
            <button onClick={handleModalClose} className='modal-close-button'>
              Close
            </button>
          </div>
        </div>
      )}
    </header>

  )
}