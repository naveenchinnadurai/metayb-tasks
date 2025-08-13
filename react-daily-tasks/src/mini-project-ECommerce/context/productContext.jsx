import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// import { products as ProductsDetails } from "../utils/products"; //hardcoded products list
import CartComponent from "../components/cart";
import { Box } from "@mui/material";

export const MyContext = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const fetchProductsFromApi = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProductsFromApi();
  }, []);

  const categories = useMemo(() => {
    return products.reduce(
      (acc, curr) => {
        if (!acc.includes(curr.category)) {
          return [...acc, curr.category];
        }
        return acc;
      },
      ["all"]
    );
  }, [products]);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const addToCart = (id) => {
    const newItem = products.some((e) => e.id == id);
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
        openCart,
        products,
        categories,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getTotal,
        toggleCart,
      }}
    >
      {products.length > 0 ? (
        children
      ) : (
        <Box
          component="div"
          className="flex justify-center items-center h-full"
        >
          <span className="loader"></span>
        </Box>
      )}
      <CartComponent />
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
