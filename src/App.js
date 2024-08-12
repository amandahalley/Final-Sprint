import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sup from './pages/Supplement/Sup';
import Clothing from './pages/Clothing/Clothing';
import Cart from './pages/cart/Cart';
import { ShoppingContextProvider } from './context/Shop';
import Footer from './components/Footer';

function App() {
  return <div className="App">
   <ShoppingContextProvider>
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/' element = {<Sup />}/>
        <Route path='/Clothing' element = {<Clothing/>}/>
        <Route path='/Cart' element = {<Cart/>}/>
      </Routes>
      <Footer />
    </Router>
   </ShoppingContextProvider>
  </div>

}

export default App;
