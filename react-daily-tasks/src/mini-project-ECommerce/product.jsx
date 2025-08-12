import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { products } from "./utils/products";
import { Box, Typography } from "@mui/material";
import ProductCard from "./components/productCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Cart from "./components/cart";
import { Provider } from "./context/productContext";

function Product() {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Footwear",
    "Accessories",
    "Electronics",
    "Home",
    "Furniture",
  ];

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  useEffect(() => {
    if (category == "All") {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter(
      (product) => product.category.toLowerCase() == category.toLowerCase()
    );
    setFilteredProducts(filtered);
  }, [category]);

  return (
    <Provider>
      <Box>
        <Navbar handleSearchText={(text) => setSearchText(text)} />
        <Box component="div" className="flex gap-5 items-center px-5">
          <Typography variant="h5">Filter by category</Typography>
          <FormControl className="w-1/3" sx={{ margin: "30px" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              onChange={handleChange}
            >
              {categories.map((e, i) => (
                <MenuItem key={i} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="grid grid-cols-4 px-10 gap-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))
          ) : (
            <Typography variant="h6">No Product Found</Typography>
          )}
        </Box>
      </Box>
    </Provider>
  );
}

export default Product;
