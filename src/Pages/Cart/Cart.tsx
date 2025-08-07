// src/Pages/Cart/CartPage.tsx

import './cart.css';
import { useCart } from './cartContext';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleIncrease = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrease = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Products added to cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty"> cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-desc">{item.productDesc}</div>
                  <div className="cart-item-price">₱{item.price}</div>

                  <div className="quantity-button">
                    <button
                      onClick={() => handleDecrease(item.id, item.quantity)}
                    >
                      -
                    </button>
                    <p className="quantity">{item.quantity}</p>
                    <button
                      onClick={() => handleIncrease(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ₱{total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default CartPage;
