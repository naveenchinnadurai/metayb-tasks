import { Grid, Typography } from "@mui/material";
import ProductCard from "../component/productCard";
import { products } from "../utils/products";

function ProductDisplay() {
  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      sx={{ mt: 4, padding: "10px" }}
    >
      <Typography sx={{ width: "100%" }} align="center" variant="h3">
        Products
      </Typography>
      {products.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <ProductCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductDisplay;
