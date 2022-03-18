import React from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ItemView from './components/ItemView/ItemView';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { CategoriesProps, ProductProps } from '.';
import './App.sass';
import Bag from './components/Bag/Bag';

interface AppProps {
  categories: Array<CategoriesProps>;
  products: Array<ProductProps>;
}

const App = ({ categories, products }: AppProps) => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="products/:id" element={<ItemView products={products} />} />
        <Route path="products" element={<Products categories={categories} products={products} />} />
        <Route path="about" element={<About />} />
        <Route path="bag" element={<Bag />} />
        <Route path="*" element={<Home products={products} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
