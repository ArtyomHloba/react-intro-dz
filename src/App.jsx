import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
