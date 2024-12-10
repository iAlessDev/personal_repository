import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Porfolio from './components/porfolio.jsx';
import Home from './components/home.jsx';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Porfolio />} />
        </Routes>
    </Router>
  );
}

export default App;
