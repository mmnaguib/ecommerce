import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Productlist from './components/Productlist';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
          <Slider />
          <Productlist />
          </>
        } />
        <Route path='about' element={<About />} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
