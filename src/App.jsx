import "./App.css";
import Home from "./Pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/login";
import RegisterPage from "./Pages/Register/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
