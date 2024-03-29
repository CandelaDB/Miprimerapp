import { BsFillCartFill } from "react-icons/bs";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from 'react-router-dom'
import "./CartWidget.css"



const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  if(totalQuantity > 0) {
    
  return (
    <div>
      <Link to={`/cart`} className= "cartWidgetLook">
        <i><BsFillCartFill size={30} />
          {totalQuantity}
        </i>
      </Link>
    </div>

  )}
}

export default CartWidget