import { Box, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useMemo, useState } from "react";
import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";
import { Provider, UseProducts } from "./context/productContext";
import { capitalizeFirstLetter } from "./utils/helpers";

function Product() {
  const { products, categories } = UseProducts();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesCategory =
        category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchText, category]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearch = (text) => setSearchText(text);

  return (
    <Box>
      <Navbar handleSearchText={handleSearch} />
      <Box component="div" className="flex gap-5 items-center px-10 pt-10">
        <Typography variant="h5">Filter by category</Typography>
        <FormControl className="w-1/3">
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
                {capitalizeFirstLetter(e)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {category !== "all" && (
        <Typography variant="subtitle1" textAlign="center" className="pt-3">
          Showing {filteredProducts.length} products for{" "}
          <strong>"{capitalizeFirstLetter(category)}"</strong> category
        </Typography>
      )}
      <Box className="grid grid-cols-4 px-10 py-5 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} productInfo={product} />
          ))
        ) : (
          <Typography variant="h6" className="col-span-4 text-center">
            No Product Found
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Product;
