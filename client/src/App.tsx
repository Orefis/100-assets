import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import NoPage from "./Components/NoPage/NoPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Twoje linki / nawigacja */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
