export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  productLink: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 298223,
    rating: 5,
    description: `
технология NFC: Да
цвет: черный
тип экрана: OLED, Super Retina XDR
диагональ: 6.1 дюйм
размер оперативной памяти: 4 ГБ
процессор: 6-ядерный Apple A15 Bionic
объем встроенной памяти: 128.0 ГБ
емкость аккумулятора: 3095.0 мАч`,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    rating: 4,
    description: `
A great phone with one of the best cameras`,
    imageUrl: '',
    productLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000'
  },
  // {
  //   id: 3,
  //   name: 'Phone Standard',
  //   price: 299,
  //   description: '',
  //   imageUrl: ''
  // }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/