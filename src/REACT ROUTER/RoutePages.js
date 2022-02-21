import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoPages from './GoPages';
import Page01 from './PAGES/Page01';
import Page02 from './PAGES/Page02';
import Page03 from './PAGES/Page03';

const RoutePages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/page-01" element={<Page01 />}/>
            <Route path="/page-02" element={<Page02 />}/>
            <Route path="/page-03" element={<Page03 />}/>
            <Route path ="/go-pages" element={<GoPages />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default RoutePages;