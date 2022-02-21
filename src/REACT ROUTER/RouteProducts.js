import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoProducts from './GoProducts';
import Product01 from './PRODUCTS/Product01';
import Product02 from './PRODUCTS/Product02';
import Product03 from './PRODUCTS/Product03';

const RouteProducts = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/product-01" element={<Product01 />}/>
            <Route path="/product-02" element={<Product02 />}/>
            <Route path="/product-03" element={<Product03 />}/>
            <Route path="go-products" element={<GoProducts />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default RouteProducts;