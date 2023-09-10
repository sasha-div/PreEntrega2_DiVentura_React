import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="h1-greeting-landing">¡Bienvenid@s!</h1>
      <ItemListContainer />
    </div>
  );
}

export default App;
