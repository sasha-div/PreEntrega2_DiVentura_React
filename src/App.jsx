import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Conocenos from './components/Conocenos/Conocenos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/product/:platform' element={<ItemListContainer />} />
        <Route path='/products/:id' element={<ItemDetailContainer />} />
        <Route path='/conocenos' element={<Conocenos />} />
        <Route path='*' element={<h1>No se encontró la página que buscas.</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;