import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, setCart } = useCart(); // Access setCart from context

  // Check if cart is defined and has items
  if (!cart || !Array.isArray(cart)) {
    return <div>Your cart is empty.</div>;
  }

  // Function to cancel the cart
  const cancelCart = () => {
    if (window.confirm("Are you sure you want to cancel the cart?")) {
      setCart([]); // Clear the cart
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))
      )}
      <button onClick={cancelCart} className="cancel-cart-button">
        Cancel Cart
      </button>
    </div>
  );
};

export default Cart;

