import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  const [number, setNumber] = useState(0);
  const [num, setNum] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculating");
    return computeFactorial(num);
  }, [num]);

  function computeFactorial(n) {
    if (n < 0) return "Invalid input";
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  return (
    <Box
      component="div"
      className="h-full flex flex-col justify-center items-center"
    >
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Real Time Character Counter
      </Typography>
      <Box>
        <TextField
          type="text"
          name="string"
          placeholder="Enter any text.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "500px" }}
        />

        <Typography variant="h6" component="h6" className="p-10">
          <strong>Length of String: </strong>
          {count}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Factorial with useMemo
      </Typography>
      <Box component="div" className="flex flex-col items-center">
        <TextField
          type="text"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          min={0}
          sx={{ width: "500px", marginBottom: "20px" }}
        />
        <Button variant="contained" onClick={() => setNum(number)}>
          Calculate
        </Button>
        <Typography variant="h6" component="h6" className="p-10">
          <strong>Factorial of {num}:</strong> {factorial}
        </Typography>
      </Box>
    </Box>
  );
}

export default CharacterCounter;
