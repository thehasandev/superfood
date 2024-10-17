"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    loadCartFromLocalStorage()
  );

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem._id === item._id
      );
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
            : cartItem
        );
      } else {
        updatedItems = [...prevItems, { ...item, quantity: 1 }];
      }
      saveCartToLocalStorage(updatedItems); // Save to local storage
      return updatedItems;
    });
  };

  // Add to cart increment
  const incrementItem = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((cartItem) =>
        cartItem._id === id
          ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
          : cartItem
      );
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  // Add to cart decrement
  const decrementItem = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((cartItem) =>
          cartItem._id === id && (cartItem.quantity || 0) > 1
            ? { ...cartItem, quantity: (cartItem.quantity || 0) - 1 }
            : cartItem
        )
        .filter((cartItem) => (cartItem.quantity || 0) > 0); // Remove items with quantity 0
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  // Add to cart delete
  const deleteItem = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((cartItem) => cartItem._id !== id);
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementItem, decrementItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
