import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import loginImage from "../assets/login.png";
import { FcGoogle as Google } from "react-icons/fc";
import { FaGithub as Github } from "react-icons/fa";
import Box from "@mui/material/Box";

function Login() {
  return (
    <div className="h-full flex justify-center items-center p-10 bg-cyan-950">
      <div className="grid grid-cols-2 w-full h-full rounded-lg overflow-hidden">
        <div className="bg-white p-20 flex flex-col justify-center  gap-5">
          <div className="flex flex-col gap-3">
            <Typography variant="h3" sx={{ fontWeight: "600" }}>
              Welcome Back,
            </Typography>
            <Typography variant="h5">Login to Continue</Typography>
          </div>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="type"
            autoComplete="current-email"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Typography
            sx={{
              fontSize: "14px",
              marginTop: "-12px",
              textAlign: "right",
              textUnderlineOffset: "10",
            }}
          >
            Forget Password!
          </Typography>
          <Button variant="contained" sx={{ padding: "10px", height: "43px" }}>
            Login
          </Button>
          <div className="grid grid-cols-2 space-x-5 py-1">
            <Box
              component="section"
              sx={{
                borderWidth: "1px",
                borderRadius: "30px",
                borderColor: "black",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Google className="text-4xl" />
            </Box>
            <Box
              component="section"
              sx={{
                borderWidth: "1px",
                borderRadius: "30px",
                borderColor: "black",
                padding: "2px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Github className="text-4xl" />
            </Box>
          </div>
        </div>
        <div className="bg-blue-950 flex items-center justify-center">
          <img src={loginImage} alt="Login Image" className="w-5/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Login;
