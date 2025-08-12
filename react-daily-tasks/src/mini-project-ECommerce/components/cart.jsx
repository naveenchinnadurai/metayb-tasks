import React, { useMemo } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { UseProducts } from "../context/productContext";
import {
  Remove as RemoveIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { products } from "../utils/products";

function Cart({ open, onClose }) {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    getTotal,
  } = UseProducts();

  const cartItems = useMemo(() => {
    if (cart.length === 0) {
      return (
        <div className="w-full flex justify-center">
          <h1 className="text-xl font-medium">No Item in Cart</h1>
        </div>
      );
    }

    return cart.map((e, i) => {
      console.log('rendered')
      const product = products.find((item) => item.id === e.id);
      if (!product) return null;

      return (
        <Card
          key={i}
          component="div"
          className="w-full flex p-3 items-center !h-fit relative shadow-2xl rounded-xl"
          sx={{
            bgcolor: "#f1f5f9 ",
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            className="bg-slate-300 h-40"
            sx={{ width: "280px" }}
          />
          <CardContent
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="caption"
              className="bg-slate-200 px-2 py-0.5 rounded-sm w-fit"
            >
              {product.category}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              {product.name}
            </Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              {product.price}
            </Typography>
            <Box className="flex items-end gap-2">
              <Box className="flex items-center gap-2">
                <IconButton
                  onClick={() => decrementQuantity(e.id)}
                  size="small"
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography>{e.quantity}</Typography>
                <IconButton
                  onClick={() => incrementQuantity(e.id)}
                  size="small"
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
              <IconButton
                onClick={() => removeFromCart(e.id)}
                size="small"
                color="error"
                sx={{ position: "absolute", top: 10, right: 10 }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      );
    });
  }, [cart]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "50%",
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
          className="flex flex-col gap-3 overflow-auto h-fit"
        >
          {cartItems}
        </Box>
      </Box>
      <Box component="div" className="self-end place-self-end pt-5">
        <Typography variant="h5">
          <strong>Total: </strong>$ {getTotal()}
        </Typography>
      </Box>
    </Drawer>
  );
}

export default Cart;
