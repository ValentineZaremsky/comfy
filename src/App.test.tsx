import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CategoriesProps, ProductProps } from '.';
import App from './App';

let categories: Array<CategoriesProps> = [];
let products: Array<ProductProps> = [];

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App categories={categories} products={products} />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
