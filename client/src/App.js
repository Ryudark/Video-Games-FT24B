import "./App.css";
import Games from "./componentes/games/Games.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/home/Home";
import GameDetail from "./componentes/gameDetail/GameDetail";
import Nav from "./componentes/nav/Nav";
import CreateGame from "./componentes/creacion/CreateGame";
import Genero from "./componentes/genero/Genero";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/Home" element={<Games />} />
        <Route path="/videogames/:id" element={<GameDetail />} />
        <Route path="/games/create" element={<CreateGame />} />
        <Route path="/genero/:genero" element={<Genero />} />
      </Routes>
    </div>
  );
}

export default App;
