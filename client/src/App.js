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
  },[dispatch])
  const ITEMS_PER_PAGE=10;
  let games = useSelector(state=> state.games) 
  
  console.log(games)
  const [datosApi, setDatosApi]= useState(games);
  const [items, setItems]= useState([...games].splice(0, ITEMS_PER_PAGE))
  const [current, setCurrent]= useState(0)
  console.log(items)


  const handleNext = ()=>{
    const totalItems = games.length;
    const nextPage = current + 1;
    const firstIndex = nextPage*ITEMS_PER_PAGE;
    if(firstIndex>totalItems) return

    setItems([...datosApi].splice(firstIndex, ITEMS_PER_PAGE))
    setCurrent(nextPage)
  }

  const handlerNext = ()=>{
    const totalItems = datosApi.length;
    const nextPage = current + 1;

    const firstIndex = nextPage*ITEMS_PER_PAGE;

    if(firstIndex===totalItems) return

    setItems([...datosApi].splice(firstIndex, ITEMS_PER_PAGE))
    setCurrent(nextPage)
  }
  const handlerPrevious = ()=>{
    const prePage= current-1
    if(prePage<0) return
    const firstIndex = prePage*ITEMS_PER_PAGE;

    setItems([...datosApi].splice(firstIndex, ITEMS_PER_PAGE))
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
