import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NotFound from "./components/NotFound";
import BasePage from "./components/BasePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
