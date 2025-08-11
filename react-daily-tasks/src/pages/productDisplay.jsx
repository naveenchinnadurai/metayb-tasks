import { Box, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../component/productCard";
import { products } from "../utils/products";

function ProductDisplay() {
  const [search, setSearch] = useState("");

  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

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
      <Box component="div" className="w-full flex justify-center">
        <TextField
          type="text"
          value={search}
          placeholder="Search Product"
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: "50%" }}
        />
      </Box>
      <Box component="div" className="grid grid-cols-3 justify-center gap-5">
        {search.length == 0 ? (
          products.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProductCard data={item} />
            </Grid>
          ))
        ) : filteredProducts.length != 0 ? (
          filteredProducts.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProductCard data={item} />
            </Grid>
          ))
        ) : (
          <Box component="div" className="col-span-3">
            <Typography variant="h6">No Product Found</Typography>
          </Box>
        )}
      </Box>
    </Grid>
  );
}

export default ProductDisplay;
