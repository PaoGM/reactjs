import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Footer from './components/Footer'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer/>} />
            <Route path="/:productos/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
