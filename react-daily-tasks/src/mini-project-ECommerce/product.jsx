import { Box, Button, IconButton, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";
import { UseProducts } from "./context/productContext";
import { capitalizeFirstLetter } from "./utils/helpers";
import { ArrowUpward, Loop } from "@mui/icons-material";

function Product() {
  const rootRef = useRef(null);
  const { products, categories, fetchProductsFromApi } = UseProducts();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [showScrollButton, setShowScrollButton] = useState(false);

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

  const handleScroll = () => {
    rootRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!rootRef.current) return;

      const scrolled = window.scrollY;

      setShowScrollButton(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position="relative" ref={rootRef}>
      <Navbar handleSearchText={handleSearch} />
      <Box
        component="div"
        className="flex justify-between items-start md:items-end  px-3 md:px-10 pt-10"
      >
        <Box
          component="div"
          className="flex flex-col sm:flex-row gap-5 md:items-center w-2/3"
        >
          <Typography variant="h5">Filter by category</Typography>
          <FormControl className="sm:w-1/3">
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
        <Button
          variant="outlined"
          sx={{ display: "flex", gap: 1 }}
          onClick={fetchProductsFromApi}
        >
          Refresh
          <Loop sx={{ fontSize: 20 }} />
        </Button>
      </Box>

      {category === "all" ? (
        <Typography variant="subtitle1" textAlign="center" className="pt-3">
          Showing All{" "}
          <strong>{filteredProducts.length}</strong>
          {" "}
          products
        </Typography>
      ) : (
        <Typography variant="subtitle1" textAlign="center" className="pt-3">
          Showing {filteredProducts.length} products for{" "}
          <strong>"{capitalizeFirstLetter(category)}"</strong> category
        </Typography>
      )}
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 sm:px-5 md:px-10 py-5 gap-5">
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
      {showScrollButton && (
        <IconButton
          sx={{
            position: "fixed",
            right: 20,
            bottom: 20,
            bgcolor: "#1e1a4d",
            padding: 1.5,
            color: "white",
            ":hover": {
              color: "black",
              bgcolor: "oklch(67.3% 0.182 276.935)",
            },
          }}
          onClick={handleScroll}
        >
          <ArrowUpward />
        </IconButton>
      )}
    </Box>
  );
}

export default Product;
