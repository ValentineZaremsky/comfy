import React from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ItemView from './components/ItemView/ItemView';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { ProductProps } from '.';
import './App.sass';
import Bag from './components/Bag/Bag';

interface AppProps {
  products: Array<ProductProps>;
}

const App = (props: AppProps) => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home products={props.products} />} />
        <Route path="products" element={<Products products={props.products} />} />
        <Route path="products/:id" element={<ItemView products={props.products} />} />
        <Route path="about" element={<About />} />
        <Route path="bag" element={<Bag />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
