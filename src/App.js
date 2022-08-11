import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Home } from "./components/Pages/Home/Home";
import { Productos } from "./components/Pages/Productos/Productos";
import { Store } from "./components/Pages/Store/Store";
import { Contact } from "./components/Pages/Contact/Contact";
import { ItemDetail } from "./components/Pages/Store/Details/ItemDetail/ItemDetail";
import { ShoppingList } from "./components/NavBar/Profile/ShoppingCart/ShoppingList/ShoppingList";
import { CartProvider } from "./contexts/CartContext";
import { User } from "./components/Pages/User/User";

export const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/Home" />}
            ></Route>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/Productos" element={<Productos />}></Route>
            <Route exact path="/store" element={<Store />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route
              exact
              path="/itemDetail/:dateId"
              element={<ItemDetail />}
            ></Route>
            <Route exact path="/login" element={<User />}></Route>
            <Route
              exact
              path="/shoppingList"
              element={<ShoppingList />}
            ></Route>
            <Route exact path="*" ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};
