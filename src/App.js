import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './components/portfolio.jsx';
import Home from './components/home.jsx';
import Navbar from './components/navbar.jsx';
import Blog from './components/blog.jsx';
import Projects from "./components/projects.jsx";
import Contact from './components/contact.jsx';

function App() {
  return (
  <Router>  
      <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={
                <div>
                  <Navbar />
                  <Home />
                  <Portfolio />
                  <Contact />
                </div>
              } />
            <Route path="/projects" element={<Projects />} />
          </Routes>
    </div>
  </Router>
  );
}

export default App;
