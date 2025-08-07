// src/Pages/Cart/cartContext.tsx

import { createContext, useContext, useState, type ReactNode} from 'react';

// Your cart item type
type Product = {
  id: number;
  name: string;
  img: string;
  productDesc: string;
  price: number;
  rating: number;
  quantity: number;
};

// Cart context type
type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Omit<Product, 'quantity'>) => void;
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Omit<Product, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
