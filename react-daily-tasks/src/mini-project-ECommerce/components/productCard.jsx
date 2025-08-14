import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  AddShoppingCart as CartIcon,
  ShoppingBag as GoToCart,
} from "@mui/icons-material";
import { UseProducts } from "../context/productContext";
import { capitalizeFirstLetter } from "../utils/helpers";

function ProductCard({ productInfo, isCartItem = false, quantity = 0 }) {
  const { id, images, title, price, description, category } = productInfo;
  console.log(images);
  const {
    cart,
    addToCart,
    toggleCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = UseProducts();

  const cartItem = quantity || cart.find((e) => e.id === id)?.quantity || 0;

  if (isCartItem) {
    // Cart Item UI
    return (
      <Card
        component="div"
        className="w-full flex p-3 items-center !h-fit relative shadow-2xl rounded-xl"
        sx={{ bgcolor: "#f1f5f9" }}
      >
        <CardMedia
          component="img"
          image={images[0]}
          alt={title}
          className="bg-slate-100 w-full h-full"
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
            {category}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="subtitle2" fontWeight={500}>
            ${price}
          </Typography>
          <Box className="flex items-end gap-2">
            <Box className="flex items-center gap-2">
              <IconButton onClick={() => decrementQuantity(id)} size="small">
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography>{cartItem}</Typography>
              <IconButton onClick={() => incrementQuantity(id)} size="small">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
            <IconButton
              onClick={() => removeFromCart(id)}
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
  }

  return (
    <Card component="div" className="flex flex-col justify-evenly">
      <CardMedia
        component="img"
        className="bg-slate-50  "
        image={images[0]}
        alt={title}
      />
      <CardContent component="div" className="!py-2 justify-evenly">
        <Typography
          variant="caption"
          display="block"
          className="bg-slate-200 px-2 w-fit rounded-sm !mb-2"
          mt={1}
        >
          {capitalizeFirstLetter(category)}
        </Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end !p-5">
        {cartItem > 0 ? (
          <Box className="flex items-center gap-2">
            <IconButton onClick={() => decrementQuantity(id)} size="small">
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography>{cartItem}</Typography>
            <IconButton onClick={() => incrementQuantity(id)} size="small">
              <AddIcon fontSize="small" />
            </IconButton>
            <Button onClick={toggleCart}>
              <GoToCart sx={{ fontSize: "18px", marginRight: "5px" }} />
              Go to Cart
            </Button>
          </Box>
        ) : (
          <Button onClick={() => addToCart(id)}>
            <CartIcon sx={{ fontSize: "18px", marginRight: "5px" }} />
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProductCard;
