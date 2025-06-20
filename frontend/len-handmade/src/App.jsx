import { Routes, Route } from "react-router";
import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import UserAuthForm from "./pages/UserAuthForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/register" element={<UserAuthForm type="register" />} />
      <Route path="/login" element={<UserAuthForm type="login" />} />
    </Routes>
  );
}

export default App;
