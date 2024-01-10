import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Update from "./pages/Update";
import WorkoutPage from "./pages/WorkoutPage";
import Uwu from "./pages/Uwu";
//components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* must be in the BrowserRouter tags */}
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Update/:id" element={<Update />} />
            <Route path="/WorkoutPage/:id" element={<WorkoutPage/>} />
            <Route path="/Uwu" Component={Uwu} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
