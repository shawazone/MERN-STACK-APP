import { BrowserRouter ,Routes, Route } from 'react-router-dom';


//pages 
import Home from './pages/Home';


//components
import NavBar from './components/NavBar';

function App() {
  return (
   <div className="App">
    <BrowserRouter>
    {/* must be in the BrowserRouter tags */}
    <NavBar /> 
     <div className='pages'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    
     </div>
    </BrowserRouter>
   </div>
  );
}

export default App;
