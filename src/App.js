import './App.css';
import ReactDOM  from 'react-dom';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router , Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Component/Footer';
import Menu  from './Pages/Menu';


function App() {
  return (
    
    <div className="App">
   <Router>
   <Navbar/>
     <Routes>
     <Route path='' element={<Home/> }/>
     <Route path='/Home' element={<Home/> }/>
     <Route path='/Menu' element={<Menu/> }/>
      </Routes>
      <Footer/>
    </Router>
        
     
    </div>
    
  );
}

export default App;
