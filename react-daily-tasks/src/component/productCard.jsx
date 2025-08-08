import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={data.image}
        alt={data.name}
        sx={{
          height: 250,
          objectFit: "contain",
          backgroundColor: "#f5f5f5",
        }}
      />

      <CardContent>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.description}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", marginTop: "15px" }}
        >
          {data.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button>Buy Now</Button>
        <Button>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
