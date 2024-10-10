
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route, useNavigate, } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import { useEffect } from 'react';
function App() {
  const navigate=useNavigate();
  useEffect(()=>{
  onAuthStateChanged(auth, async (user)=>{
    if(user){
      console.log("Logged In");
      navigate('/');
    }else{
      console.log("Logged out");
      navigate('/login')
    }
  },[]);
  })
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
