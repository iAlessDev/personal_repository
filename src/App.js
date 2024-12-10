import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './components/portfolio.jsx';
import Home from './components/home.jsx';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </Router>
  );
}

export default App;
