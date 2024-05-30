import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import Home from "./pages/Home";
import Update from "./pages/Update";
import WorkoutPage from "./pages/WorkoutPage";
import Uwu from "./pages/Uwu";
//components
import NavBar from "./components/NavBar";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
const {user}= useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        {/* must be in the BrowserRouter tags */}
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home/>:<Navigate to="/login"/>} />
            <Route path="/Update/:id" element={<Update />} />
            <Route path="/WorkoutPage/:id" element={<WorkoutPage/>} />
            <Route path="/Uwu" Component={Uwu} />
            <Route path="/Signup" element={!user ? <Signup/> :<Navigate to="/"/>} />
            <Route path="/Login" element={!user ? <Login/> :<Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
