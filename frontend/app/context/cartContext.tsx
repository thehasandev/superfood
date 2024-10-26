"use client";

import { createContext, useState, useContext, useEffect, ReactNode } from "react";

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
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

export const CartProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage only on client-side mount
    const initialCartItems = loadCartFromLocalStorage();
    setCartItems(initialCartItems);
  }, []);

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

  const decrementItem = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((cartItem) =>
          cartItem._id === id && (cartItem.quantity || 0) > 1
            ? { ...cartItem, quantity: (cartItem.quantity || 0) - 1 }
            : cartItem
        )
        .filter((cartItem) => (cartItem.quantity || 0) > 0);
      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

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
