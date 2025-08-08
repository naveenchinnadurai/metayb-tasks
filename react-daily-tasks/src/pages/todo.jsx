import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import Delete from "@mui/icons-material/DeleteOutline";
function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    "Finish Day-4 Task",
    "Push Code to Github",
  ]);

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    setTodoList((prev) => [...prev, todo]);
    setTodo("");
  };

  return (
    <Grid
      container
      padding={5}
      alignItems="center"
      direction="column"
      sx={{ height: "100vh", gap: 4, backgroundColor: "#ece5c7" }}
    >
      <Typography variant="h4" color="#7c6847">
        Todo List
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ gap: 2, width: "50%" }}
      >
        <TextField
          fullWidth
          label="Todo"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          sx={{
            input: {
              color: "#000",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={handleAddTodo}
          sx={{
            paddingX: "50px",
            paddingY: "15px",
            height: "fit-content",
            fontSize: "15px",
          }}
        >
          Add
        </Button>
      </Box>

      <Box
        display="grid"
        gridColumn={2}
        gap={3}
        padding={3}
        sx={{ width: "50%" }}
      >
        {todoList.map((item, index) => (
          <TodoCard
            todo={item}
            index={index}
            deleteFunction={() =>
              setTodoList(todoList.filter((todo, i) => i != index))
            }
          />
        ))}
      </Box>
    </Grid>
  );
}

const TodoCard = ({ todo, index, deleteFunction }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #807b60",
      }}
    >
      <Typography variant="body1" color="#000">
        {`${index + 1}) ${todo}`}
      </Typography>
      <IconButton
        size="medium"
        sx={{ backgroundColor: "#ff3d00" }}
        onClick={deleteFunction}
      >
        <Delete fontSize="20px" color="#000" />
      </IconButton>
    </Box>
  );
};

export default Todo;
