import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllGames, getGeneros, cargando } from "../../redux/actions/actions.js";
import Nav from "../nav/Nav.jsx";
import Pagination from "../paginacion/Pagination.jsx";
import charge from "../../imagenes/cargando.gif"
import noEncontrado from "../../imagenes/error-404.jpg"
import "./Games.css"

export default function Games() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(cargando(true))
    dispatch(getGeneros());
    dispatch(getAllGames());
  }, [dispatch]);
  const ITEMS_PER_PAGE = 15;
  let games = useSelector((state) => state.games);
  const loading = useSelector((state) => state.loader);

  const [items, setItems] = useState([]);
  

  useEffect(() => {
    function corteJuegos() {
      const guardar = games.slice(0, ITEMS_PER_PAGE);
      setItems(guardar);
    }
    corteJuegos();
  }, [games]);

  const [current, setCurrent] = useState(1);

  const handlerNext = () => {
    const totalItems = games.length;
    const nextPage = current + 1; //2   3
    //1   2
    const firstIndex = current * ITEMS_PER_PAGE; //15  30
    const lastIndex = nextPage * ITEMS_PER_PAGE; //30  45
    if (firstIndex > totalItems) return;
    setItems(games.slice(firstIndex, lastIndex)); //15-30 30-45
    setCurrent(nextPage);
  };

  const handlerPrevious = () => {
    const prePage = current - 1;
    const prePePage = current - 2;
    if (prePePage <= -1) return;
    const firstIndex = prePePage * ITEMS_PER_PAGE; //0 15
    const lastIndex = prePage * ITEMS_PER_PAGE; //15 30
    setItems(games.slice(firstIndex, lastIndex)); //0-15  15-30
    setCurrent(prePage);
  };

  if(loading){
    return(
      <div className="load">
        <img src={charge} className="loading" alt="Cargando.... Por favor espere...." />
      </div>
    )
  }

  return (
    <div className="fondo">
      <Nav />
      {items.length>0? <Pagination
        items={items}
        handlerNext={handlerNext}
        handlerPrevious={handlerPrevious}
      />
      :(
        <div>
          <h1 className="error">Juego No Encontrado </h1>
          <img src={noEncontrado} alt="not found" />
        </div>
      )}
    </div>
  );
}
