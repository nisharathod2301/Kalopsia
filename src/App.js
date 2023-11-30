import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
// import Breadcrums from '../Components/Breadcrums/Breadcrums';

import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/her' element={<ShopCategory category="her"/>}/>
        <Route path='/Accessories' element={<ShopCategory category="Accessories"/>}/>
        {/* <Route path='/fragnance' element={<ShopCategory category="fragnance"/>}/> */}
        <Route path="/product/*" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes> 
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
