import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

function FeedbackForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validate = () => {
    if (!data.name.trim()) return "Name is required";
    if (!data.email.trim()) return "Email is required";
    if (!data.message.trim()) return "Message cannot be empty";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setOpen(true);
      setData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 2000);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Box className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-md shadow-md flex flex-col gap-3"
      >
        <Typography variant="h5" className="text-center">
          Feedback Form
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          size="small"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          size="small"
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Message"
          name="message"
          value={data.message}
          onChange={handleChange}
          size="small"
        />

        {error && (
          <Typography variant="body2" className="text-red-600">
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </Button>
      </Box>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your feedback has been submitted successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Close
          </Button>
          <Button onClick={handleCloseDialog} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default FeedbackForm;
