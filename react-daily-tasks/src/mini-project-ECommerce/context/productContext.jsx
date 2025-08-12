import { createContext, useContext, useState } from "react";
import { products } from "../utils/products";

export const MyContext = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const newItem = products.find((e) => e.id == id);
    if (!newItem) return;

    const newCartItem = {
      quantity: 1,
      id,
    };

    setCart([...cart, newCartItem]);
  };

  const incrementQuantity = (id) => {
    const existingItem = cart.find((e) => e.id == id);
    if (!existingItem) return;

    setCart((prev) =>
      prev.map((e) => {
        if (e.id == id) {
          e.quantity = e.quantity + 1;
          return e;
        }
        return e;
      })
    );
  };

  const decrementQuantity = (id) => {
    const existingItem = cart.find((e) => e.id == id);
    if (!existingItem) return;

    if (existingItem.quantity == 1) {
      removeFromCart(id);
      return;
    }

    setCart((prev) =>
      prev.map((e) => {
        if (e.id == id) {
          e.quantity = e.quantity - 1;
        }
        return e;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((e) => e.id != id));
  };

  const getTotal = () => {
    return cart.reduce((acc, curr) => {
      const item = products.find((e) => e.id == curr.id);
      return acc + item.price * curr.quantity;
    }, 0);
  };

  return (
    <MyContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getTotal,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const UseProducts = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a Provider");
  }
  return context;
};
