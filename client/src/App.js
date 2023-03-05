import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
/*import Header from "./pages/Header";*/
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Register from './pages/Register';


const Header = () => {
  return (
    <div style={{ backgroundColor: '#3CBBB1', height: '100px' }}>
      <h1 style={{ textAlign: 'center', lineHeight: '100px', color: 'white' }}>Header</h1>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#FF9F1C', height: '500px', display: 'flex', flexDirection: 'column' }}>
      <Link to="/register" style={{ padding: '20px', color: 'white' }}>
        회원가입
      </Link>
      <Link to="/login" style={{ padding: '20px', color: 'white' }}>
        로그인
      </Link>
      <Link to="/contact" style={{ padding: '20px', color: 'white' }}>
        Contact
      </Link>
    </div>
  );
};


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
        <Route path="/about" element={<About />} />
        <Route path="/page/:id" />
      </Routes>
      </div>
    </Router>
  );
}

export default App;