import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Update from "./pages/Update";

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
