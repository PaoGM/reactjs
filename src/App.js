import NavBar from './components/NavBar'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';
import Bag from './pages/Bag';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import BagProvider from './context/BagContext';

function App () {
  return (
    <BagProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path="/productos/:id" element={<Detail/>}/>
              <Route path="/bag" element={<Bag/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </BagProvider>
  );
}

export default App;
