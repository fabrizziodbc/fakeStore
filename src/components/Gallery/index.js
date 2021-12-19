import React from 'react';
import ProductCard from '../ProductCard';

import './style.scss';

const Gallery = () => {
  const productList = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 3,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 4,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 5,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 6,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 7,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 8,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 9,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
  ];
  const title = 'Nombre de la galería';
  return (
    <div className="gallery">
      <h1 className="gallery__title">{title}</h1>
      <div className="gallery__grid">
        {productList.map((e) => (
          <ProductCard key={e.id} title={e.title} img={e.image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
