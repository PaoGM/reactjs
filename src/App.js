import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title= "Bienvenidos a Sorella Calzados"/>
    </div>
  );
}

export default App;
