import './App.css'
import TopNav from './Layout/TopNav';

//import LandingPage from './Pages/LandingPage/LandingPAge';
import './Pages/LandingPage/LandingPage.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPAge';
import Phones from './Pages/Phones/Phone'; 
import Laptop from './Pages/Laptops/Laptop';
import Homepage from './Pages/HomePage/Homepage';
import Cart from './Pages/Cart/Cart';


function AppContent() {
  const location = useLocation();

  // Check if the current path is the landing page
  const isLandingPage = location.pathname === '/';

  return (
    <>
      {/* Conditionally render the TopNav. 
          It will only appear if we are NOT on the landing page. */}
      {!isLandingPage && <TopNav />}
      
      <Routes>
        {/* The landing page is now the root route */}
        <Route path='/' element={<LandingPage />} />
        
        {/* All other main pages are nested under a new path like '/home' */}
        <Route path='/home' element={<Homepage />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/laptops' element={<Laptop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}


function App() {

 
  return (
    <div>
        <BrowserRouter>   
          <AppContent />
        </BrowserRouter>
    </div>
  
  );
}

export default App;
