import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router";
import "./App.css";
import AccordionPractice from "./pages/accordion";
import CharacterCounter from "./pages/characterCounter";
import Count from "./pages/count";
import DashboardLayout from "./pages/dashBoard";
import DisplayUser from "./pages/displayUser";
import FeedbackForm from "./pages/feedback";
import Greetings from "./pages/greetings";
import Home from "./pages/home";
import Login from "./pages/login";
import ProductDisplay from "./pages/productDisplay";
import Signup from "./pages/signup";
import Todo from "./pages/todo";
import ToggleVisibility from "./pages/toggleVisibility";
import newTheme from "./themes/newTheme";
import Product from "./mini-project-ECommerce/product";
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/display-user" element={<DisplayUser />} />
        <Route path="/count-character" element={<CharacterCounter />} />
        <Route path="/e-commerce" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
