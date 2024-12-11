import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex ">
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavouritePage />} />
      </Routes>
    </div>
  );
}

export default App;
