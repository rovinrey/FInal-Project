// src/Pages/Cart/CartPage.tsx
import './cart.css';
import { useCart } from './cartContext';

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-desc">{item.productDesc}</div>
                <div className="cart-item-price">₱{item.price}</div>
                <div className="cart-item-qty">Quantity: {item.quantity}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
