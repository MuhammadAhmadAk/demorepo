import "../src/assets/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contact";
import CakePage from "./pages/cakepage";
import CookiesPage from "./pages/cookiespage";
import BreadPage from "./pages/breadpage";
import CreateBlog from "./components/createblog";
function App() {
  return (
    <>
      <Router>
        <Header />
        <CreateBlog />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cake" element={<CakePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/bread" element={<BreadPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
