"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useCart } from "./cartContext"; // Ensure this path is correct

// Define the context type
interface TotalAmountContextType {
  totalAmount: number;
}

// Create the context
const TotalAmountContext = createContext<TotalAmountContextType | undefined>(
  undefined
);

interface TotalAmountProviderProps {
  children: ReactNode;
}

// Create the provider component
export const TotalAmountProvider: React.FC<TotalAmountProviderProps> = ({
  children,
}) => {
  const { cartItems } = useCart();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const savedTotalAmount = localStorage.getItem("totalAmount");
    if (savedTotalAmount) {
      setTotalAmount(Number(savedTotalAmount));
    }
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 0);
    }, 0);
    setTotalAmount(total);

    localStorage.setItem("totalAmount", total.toString());
  }, [cartItems]);

  return (
    <TotalAmountContext.Provider value={{ totalAmount }}>
      {children}
    </TotalAmountContext.Provider>
  );
};

export const useTotalAmount = (): TotalAmountContextType => {
  const context = useContext(TotalAmountContext);
  if (context === undefined) {
    throw new Error("useTotalAmount must be used within a TotalAmountProvider");
  }
  return context;
};
