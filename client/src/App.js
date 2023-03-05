import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Mypage from "./pages/Mypage/Mypage";
import Register from './pages/Register/Register';
import Board from './pages/Board/Board';




function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/page/:id" />
      </Routes>
      </div>
    </Router>
  );
}

export default App;