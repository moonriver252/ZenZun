import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/page/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;