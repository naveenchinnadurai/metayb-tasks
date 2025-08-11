import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useRef, useState } from "react";
import ArrowUp from "@mui/icons-material/ArrowUpward";
import Refresh from "@mui/icons-material/Cached";

function DisplayUser() {
  const API_URL = "https://dummyjson.com/users";
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();
  const ref = useRef(null);

  const fetchUser = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    if (res.status == 200) {
      const data = await res.json();
      setUsers(data.users);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const scrollToTop = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (loading)
    return (
      <Box component="div" className="flex justify-center items-center h-full">
        <span className="loader"></span>
      </Box>
    );

  return (
    <Box component="div" className="grid grid-cols-4 gap-4 p-10" ref={ref}>
      <Typography
        variant="h3"
        className="col-span-4 text-center flex items-center justify-center gap-3"
      >
        User List
        <IconButton onClick={() => fetchUser()}>
          <Refresh />
        </IconButton>
      </Typography>
      {users &&
        users.map((user) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={user.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={user.image}
                  alt={user.firstName + " " + user.lastName}
                />
                <CardContent
                  component="div"
                  className="flex flex-col justify-start"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {user.firstName + " " + user.lastName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <strong>Email: </strong>
                    {user.email}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <strong>Phone No.: </strong>
                    {user.phone}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <strong>Role: </strong>
                    {user.role}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      <IconButton
        sx={{
          position: "fixed",
          bottom: 60,
          right: 60,
          bgcolor: "#1e1a4d",
          color: "white",
          "&:hover": {
            bgcolor: "#c7d2fe",
            color: "black",
          },
        }}
        onClick={scrollToTop}
      >
        <ArrowUp />
      </IconButton>
    </Box>
  );
}

export default DisplayUser;
