import "./App.css";
import Games from "./componentes/games/Games.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/home/Home";
import GameDetail from "./componentes/gameDetail/GameDetail";
import Nav from "./componentes/nav/Nav";
import CreateGame from "./componentes/creacion/CreateGame";
import Genero from "./componentes/genero/Genero";
import Pagination from "./componentes/paginacion/Pagination";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllGames, getGeneros } from "./redux/actions/actions";

function App() {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllGames())
    dispatch(getGeneros())
  },[])
  const ITEMS_PER_PAGE=15;
  let games = useSelector(state=> state.games) 
  
  const [items, setItems]= useState([])
  function corteJuegos(){
    const guardar=games.slice(0, ITEMS_PER_PAGE)
    setItems(guardar)
  }
  useEffect(()=>{
    corteJuegos();
  },[games])

  const [current, setCurrent]= useState(1)

  const handlerNext = ()=>{
    const totalItems = games.length;
    const nextPage = current + 1;                 //2   3
                                                  //1   2
    const firstIndex = current*ITEMS_PER_PAGE;    //15  30
    const lastIndex = nextPage*ITEMS_PER_PAGE;    //30  45
    setItems(games.slice(firstIndex, lastIndex))  //15-30 30-45
    setCurrent(nextPage)
    if(firstIndex>totalItems) return
  }

  console.log(current)

  const handlerPrevious = ()=>{
    const prePage= current-1
    const prePePage = current-2
    if(prePePage<=-1) return
                                                //1 2 
                                                //0 1 
    const firstIndex = prePePage*ITEMS_PER_PAGE;  //0 15 
    const lastIndex = prePage*ITEMS_PER_PAGE;   //15 30
    setItems(games.slice(firstIndex, lastIndex))    //0-15  15-30
    setCurrent(prePage)

  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* <Route path='/home' element={<Home />}/> */}
        <Route path="/" element={<Pagination  items={items} handlerNext={handlerNext} handlerPrevious={handlerPrevious}/>} />
        <Route path="/videogames/:id" element={<GameDetail />} />
        <Route path="/games/create" element={<CreateGame />} />
        <Route path="/genero/:genero" element={<Genero />} />
      </Routes>
    </div>
  );
}

export default App;
