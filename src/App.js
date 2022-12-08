import NavBar from './components/NavBar'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';
import Contacto from './pages/Contacto'
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path="/productos/:id" element={<Detail/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
