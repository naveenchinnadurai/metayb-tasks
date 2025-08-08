import Button from "@mui/material/Button";

const CustomButton = ({ handleClick, children }) => {
  return (
    <Button
      variant="contained"
      sx={{ paddingX: "20px", backgroundColor: "#4b6084" }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
