import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import NoPage from "./Components/NoPage/NoPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import DashboardContent from "./Components/HomePage/HomePageContent//DashboardContent";
import GuidesContent from "./Components/HomePage/HomePageContent/GuidesContent";
import InventoryContent from "./Components/HomePage/HomePageContent/InventoryContent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NoPage />} />
          <Route element={<HomePage />}>
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/guides" element={<GuidesContent />} />
            <Route path="/inventory" element={<InventoryContent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
