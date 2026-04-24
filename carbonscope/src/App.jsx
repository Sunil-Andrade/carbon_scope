import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SubmitAction from "./pages/SubmitAction";
import VerificationStatus from "./pages/VerificationStatus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submit" element={<SubmitAction />} />
      <Route path="/verification" element={<VerificationStatus />} />
    </Routes>
  );
}

export default App;
