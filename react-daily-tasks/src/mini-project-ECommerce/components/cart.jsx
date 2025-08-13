import { Close } from "@mui/icons-material";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import ProductCard from "./productCard";
import { UseProducts } from "../context/productContext";

function Cart() {
  const {
    cart,
    getTotal,
    products,
    openCart: open,
    toggleCart: onClose,
  } = UseProducts();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "50% ",
          padding: "20px",
          overflow: "auto",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Box component="div" className="flex w-full justify-between">
          <Typography variant="h6">Cart Items</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box
          component="div"
          className="flex flex-col gap-3 overflow-auto h-fit py-2"
        >
          {cart.length === 0 ? (
            <div className="w-full flex justify-center ">
              <h1 className="text-xl font-medium">No Item in Cart</h1>
            </div>
          ) : (
            cart.map((e) => {
              const product = products.find((item) => item.id === e.id);
              if (!product) return null;

              return (
                <ProductCard
                  key={product.id}
                  productInfo={product}
                  isCartItem={true}
                  quantity={e.quantity}
                />
              );
            })
          )}
        </Box>
      </Box>
      <Box
        component="div"
        className="pt-5 w-full flex justify-between items-center"
      >
        <Typography variant="h5">
          <strong>Total: </strong>$ {Math.round(getTotal())}
        </Typography>
        <Button variant="contained">Place Order</Button>
      </Box>
    </Drawer>
  );
}

export default Cart;
