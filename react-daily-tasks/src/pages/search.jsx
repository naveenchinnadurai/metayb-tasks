import { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const laptops = [
    {
      id: 1,
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      cpu: "Intel Core i7-1260P",
      ram: "16GB",
      storage: "512GB SSD",
      price: 1499,
    },
    {
      id: 2,
      brand: "Dell",
      model: "XPS 13 Plus",
      cpu: "Intel Core i7-1360P",
      ram: "16GB",
      storage: "1TB SSD",
      price: 1799,
    },
    {
      id: 3,
      brand: "Acer",
      model: "Swift X",
      cpu: "AMD Ryzen 7 5800U",
      ram: "16GB",
      storage: "512GB SSD",
      price: 1099,
    },
    {
      id: 4,
      brand: "HP",
      model: "Spectre x360",
      cpu: "Intel Core i7-1355U",
      ram: "16GB",
      storage: "1TB SSD",
      price: 1599,
    },
  ];

  const filteredLaptops = laptops.filter((laptop) =>
    laptop.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Typography variant="h4" className="text-center" sx={{ marginBottom: 2 }}>
        Search Laptops
      </Typography>

      <TextField
        type="text"
        placeholder="Search by brand name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <List className="divide-y divide-gray-200">
        {filteredLaptops.length > 0 ? (
          filteredLaptops.map((laptop) => (
            <ListItem key={laptop.id} className="py-3 flex flex-col">
              <Typography variant="h6" className="font-medium text-gray-800">
                {laptop.brand} {laptop.model}
              </Typography>
              <Typography variant="body2" className="text-sm text-gray-600">
                CPU: {laptop.cpu} | RAM: {laptop.ram} | Storage:{" "}
                {laptop.storage}
              </Typography>
              <Typography
                variant="body2"
                className="text-sm text-gray-600 font-semibold"
              >
                Price: ${laptop.price}
              </Typography>
            </ListItem>
          ))
        ) : (
          <ListItem className="py-3 text-gray-400 italic">
            No matching laptops found
          </ListItem>
        )}
      </List>
    </Box>
  );
}
