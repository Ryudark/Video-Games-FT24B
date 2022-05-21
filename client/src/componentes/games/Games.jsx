import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllGames, getGeneros } from "../../redux/actions/actions.js";
import Nav from "../nav/Nav.jsx";
import Pagination from "../paginacion/Pagination.jsx";

export default function Games() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGeneros());
  }, [dispatch]);
  const ITEMS_PER_PAGE = 15;
  let games = useSelector((state) => state.games);

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

  return (
    <div>
      <Nav />
      <Pagination
        items={items}
        handlerNext={handlerNext}
        handlerPrevious={handlerPrevious}
      />
    </div>
  );
}
