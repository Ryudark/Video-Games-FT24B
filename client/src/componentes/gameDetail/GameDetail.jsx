import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  cargando,
  getDetailGame,
  limpiarDetalle,
} from "../../redux/actions/actions.js";
import charge from "../../imagenes/cargando.gif";
import "./GameDetail.css";

export default function GameDetail() {
  // let params = useParams()
  // const id = params.id ? params.id : game.id;
  let dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(cargando(true));
    dispatch(getDetailGame(id));
    return function () {
      dispatch(limpiarDetalle());
    };
  }, [dispatch, id]);
  const loading = useSelector((state) => state.loader);
  let game = useSelector((state) => state.gameDetail);

  if (loading) {
    return (
      <div className="load">
        <img
          src={charge}
          className="loading"
          alt="Cargando.... Por favor espere...."
        />
      </div>
    );
  }

  return (
    <div className="fondoDetail">
      {game ? (
        <div className="cardDetail" key={game.id}>
          <h1 className="tituloDetail">{game.name}</h1>
          <img className="ImagenDetail" src={game.image} alt={game.name} />
          <h4 className="tituloElem">Lanzamiento: {game.released}</h4>
          <h4 className="tituloElem">Descripción </h4>
          <p className="Descripcion-Detalle">{game.description}</p>
          <h4 className="tituloElem">Plataformas: {game.platforms}</h4>
          <h4 className="tituloElem">Rating: {game.rating}</h4>
          <div>
          <h4 className="tituloElem"> 
            Generos: {game.genres?.map(genre=>genre.name).join(",  ")}
          </h4>
            {/* {game.genres
              ? game.genres.map((genero, index) => (
                  <Link key={index} to={`/genero/${genero.name}`}>
                    <h4>{genero.name}</h4>
                  </Link>
                ))
              : 0} */}
          </div>
          <Link to="/home">
            <button className="botonHomeDetail">HOME</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
