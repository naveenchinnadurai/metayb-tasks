import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import Cart from "@mui/icons-material/AddShoppingCart";
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
import { UseProducts } from "../context/productContext";

function ProductCard({ productInfo }) {
  const { cart, addToCart, incrementQuantity, decrementQuantity } =
    UseProducts();
  const { id, image, name, price, description, category } = productInfo;

  return (
    <Card component="div" className="flex flex-col justify-evenly">
      <CardMedia
        component="img"
        className="bg-slate-300 h-40"
        image={image}
        alt={name}
      />
      <CardContent component="div" className="!py-2 justify-evenly">
        <Typography
          variant="caption"
          display="block"
          className="bg-slate-200 px-2 w-fit rounded-sm !mb-2"
          mt={1}
        >
          {category}
        </Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end !p-5">
        {cart.find((e) => e.id == id) ? (
          <Box className="flex items-center gap-2">
            <IconButton onClick={() => decrementQuantity(id)} size="small">
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography>{cart.find((e) => e.id == id).quantity}</Typography>
            <IconButton onClick={() => incrementQuantity(id)} size="small">
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <Button onClick={() => addToCart(id)}>
            <Cart sx={{ fontSize: "18px", marginRight: "5px" }} />
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProductCard;
