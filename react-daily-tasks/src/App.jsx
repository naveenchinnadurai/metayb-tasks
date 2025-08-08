import { Route, Routes } from "react-router";
import "./App.css";
import Count from "./pages/count";
import Home from "./pages/home";
import Greetings from "./pages/greetings";
import ToggleVisibility from "./pages/toggleVisibility";
import Login from "./pages/login";
import ProductDisplay from "./pages/productDisplay";
import { ThemeProvider } from "@emotion/react";
import newTheme from "./themes/newTheme";
import DashboardLayout from "./pages/dashBoard";
import AccordionPractice from "./pages/accordion";
import Todo from "./pages/todo";
function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/greet" element={<Greetings />} />
        <Route path="/toggle-visibility" element={<ToggleVisibility />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <ThemeProvider theme={newTheme}>
              <ProductDisplay />
            </ThemeProvider>
          }
        />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/accordion" element={<AccordionPractice />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
