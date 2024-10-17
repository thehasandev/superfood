// // src/context/CartContext.tsx
// import { createContext, useState, useContext, ReactNode } from "react";


// // Define the context type
// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
// }

// // Create a context
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Provider component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   // Add item to the cart
//   const addToCart = (item: CartItem) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

//       // If item already exists, update quantity
//       if (existingItem) {
//         return prevItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 } // Increment quantity safely
//             : cartItem
//         );
//       }

//       // Add new item to the cart with quantity set to 1
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
