import { Route, Routes } from "react-router";
import "./App.css";
import Count from "./pages/count";
import Home from "./pages/home";
import Greetings from "./pages/greetings";
import ToggleVisibility from "./pages/toggleVisibility";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/greet" element={<Greetings />} />
        <Route path="/toggle-visibility" element={<ToggleVisibility />} />
      </Routes>
    </div>
  );
}

export default App;
