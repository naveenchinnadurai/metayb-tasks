import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Signup() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePopup = () => {
    setOpen((prev) => !prev);
  };

  const validateFormData = () => {
    if (!data.firstname.trim()) return "First Name is missing";
    if (!data.lastname.trim()) return "Last Name is missing";
    if (!data.email.trim()) return "Email is missing";
    if (!data.mobile.trim()) return "Mobile No. is missing";
    if (!data.password) return "Password is missing";
    if (!data.confirmPassword) return "Confirm Password is missing";
    if (data.confirmPassword !== data.password)
      return "Confirm Password must match Password";
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const validationError = validateFormData();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setOpen(true);
        setData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
        });
    }, 2000);
  };

  return (
    <Box className="bg-indigo-950 flex justify-center items-center min-h-screen p-4">
      <Box
        component="form"
        noValidate
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-xl p-8 gap-5 bg-white rounded-lg shadow-md"
      >
        <Box className="col-span-1 md:col-span-2">
          <Typography variant="h4" gutterBottom>
            Signup Here..
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Let’s get started
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="First Name"
          name="firstname"
          value={data.firstname}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastname"
          value={data.lastname}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Mobile"
          name="mobile"
          value={data.mobile}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
        />

        {error && (
          <Typography
            variant="body2"
            className="text-red-600 col-span-1 md:col-span-2"
          >
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          className="col-span-1 md:col-span-2 h-12"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Signup"}
        </Button>
      </Box>

      <Dialog open={open} onClose={togglePopup}>
        <DialogTitle>Registeration</DialogTitle>
        <DialogContent>
          <DialogContentText>Account created successfully!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={togglePopup}>Close</Button>
          <Button onClick={togglePopup}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Signup;
