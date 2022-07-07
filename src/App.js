import React from 'react';
import './estilos.css';

import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default  function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element= {<ItemListContainer greeting={'PRODUCTOS'} />}/>
        <Route path="/category/:idcategoria" element= {<ItemListContainer greeting={'SELECCIONADOS'} />}/>
        <Route path="/item:iditem" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};


