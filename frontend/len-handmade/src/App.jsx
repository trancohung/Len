import { Routes, Route } from "react-router";
import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="/login" element={<h1>Log In</h1>} />
    </Routes>
  );
}

export default App;
