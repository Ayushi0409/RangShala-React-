import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch cart items from Firestore
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cart'));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          quantity: doc.data().quantity || 1, // default quantity if not in DB
        }));
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    // You can also delete from Firebase here if needed
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Link to="/" className="close-button">X</Link>
        <h2 className="cart-title">YOUR CART</h2>
      </div>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image } // default if image missing
                  alt={item.title}
                  className="item-image"
                />
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-artist">{item.artist}</p>
                  <p className="item-dimensions">{item.dimensions || 'N/A'}</p>
                  <p className="item-price">INR {item.price.toLocaleString()}</p>
                </div>
                <div className="item-actions">
                  <button className="edit-button">EDIT</button>
                  <div className="quantity-selector">
                    <button
                      className="quantity-button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-text">QUANTITY: {item.quantity}</span>
                    <button
                      className="quantity-button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="delete-button" onClick={() => removeItem(item.id)}>
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <p className="total">TOTAL: INR {total.toLocaleString()}</p>
            <div className="action-buttons">
              <button className="view-more-button" onClick={() => navigate('/artwork-gallery')}>
                VIEW MORE
              </button>
              <button className="checkout-button" onClick={() => navigate('/checkout')}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
