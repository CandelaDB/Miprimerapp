import React from 'react';
import './estilos.css';

import  {Navbar}  from '../src/components/Navbar/Navbar';
import { ItemListContainer } from '../src/components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../src/components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvidar } from '../src/components/context/CartContext';
import Footer from '../src/components/Footer/Footer';


export default  function App() {
  return (
    <CartProvidar>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element= {<ItemListContainer greeting={'PRODUCTOS'} />}/>
        <Route path="/category/:idcategoria" element= {<ItemListContainer greeting={'SELECCIONADOS'} />}/>
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </CartProvidar>
  );
};


