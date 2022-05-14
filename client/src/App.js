import './App.css';
import Games from './componentes/games/Games.jsx';
// import GameDetail  from './componentes/gameDetail/GameDetail.jsx'
import imagePrincipal  from './imagenes/1603915291-Gamers.jpg'
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home';
import GameDetail from './componentes/gameDetail/GameDetail';
import Nav from './componentes/nav/Nav';

function App() {
  return (
    <div className="App tamano">
      <h1> HENRY VIDEOGAMES </h1>
      <img src= {imagePrincipal} alt = "img-principal" />
      <Nav />
      <Routes>
        {/* <Route path='/home' element={<Home />}/> */}
        <Route path='/' element={<Games />}/>
        <Route path='/videogames/:id' element={<GameDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
