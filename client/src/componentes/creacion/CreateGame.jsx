import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getGeneros, postGame } from "../../redux/actions/actions.js"
import "./CreateGame.css"

export default function CreateGame(){
    let genero = useSelector(state=> state.generos)
    const juego = useSelector((state) => state.games);
    // const platforms = useSelector((state) => state.platforms);
    let dispatch = useDispatch()
    const generos= []
    const plataformas=['Xbox','PC','PlayStation','GameBoy', 'Nintendo Switch', 'Ios', 'Android']
    
    useEffect(()=>{
        dispatch(getGeneros())
    },[dispatch])

    for(let i=0; i<genero.length;i++){
        generos.push(genero[i].name)
    }
    const [game, setGame] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
      })
    let [check, setCheck]=useState(new Array(19).fill(false))//new Array(generos.length).fill(false)
    let [checkP, setCheckP]=useState(new Array(plataformas.length).fill(false))

    function checkOnChange (position){
        const upCheck = check.map((item, index) =>
        index === position ? !item : item)
        setCheck(upCheck)

        let parcial=[]
        upCheck.map((currentState, index)=>
            currentState===true?
                parcial=parcial.concat(generos[index]):0
        )
        setGame({...game, genres:parcial})
    }

    function checkOnChangePlat (position){
        const upCheck = checkP.map((item, index) =>
        index === position ? !item : item)
        setCheckP(upCheck)

        let parcial=[]
        upCheck.map((currentState, index)=>{
            if(currentState===true){
                parcial=parcial.concat(plataformas[index])
            }
            return 0
        })
        setGame({...game, platforms:parcial})
    }

    function onInputChange(e){
        e.preventDefault()
        setGame({   
            ...game,
            [e.target.name]:e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        // axios.post('http://localhnost:3001/videogames', game)
        if (!game.name.trim()) {
            return alert("Necesita poner un nombre");
        } 
        else if (juego.find( (e) => e.name.toLowerCase().trim() === game.name.toLowerCase().trim())) {
            return alert(`El nombre ${game.name} ya existe`);
        }
        else if (game.description.trim() === "") {
            return alert("Descripción requerida");
        } 
        else if (game.image.trim() === "") {
            return alert("Se requiere Link de imagen");
        }
        else if (game.released.trim() === "") {
            return alert("Fecha de lanzamiento requerida");
        } 
        else if (game.released < "1951-05-03") {
            return alert("La fecha no puede ser inferior a 03/05/1951");
        } 
        else if (game.genres.length === 0) {
            return alert("Seleccione uno o más generos");
        } 
        else if (
            game.rating.trim() === "" ||
            game.rating < 1 ||
            game.rating > 5
        ) {
        return alert("Rating debe estar entre 1 o 5");
        } 
        else if (game.platforms.length === 0) {
            return alert("Seleccione uno o más plataformas");
        }
        else{
            dispatch(postGame(game))
            alert("Felicidades, Videojuego Creado");
            setGame({
                name: "",
                image: "",
                description: "",
                released: "",
                rating: "",
                genres: [],
                platforms: [],
              });
            document.getElementById("formulario").reset();
            window.location.reload();
        }
    } 
    return (
        <div className="fondoLoading">
            <h1 className="tituloVideogame">CREA TU VIDEOJUEGO</h1>
            <form id="formulario" onSubmit={onSubmit}>
                <div className="item">
                    <label className="label">Nombre</label>
                    <input onChange={onInputChange} name="name" type="text" value={game.name}/>
                </div>
                <div className="item">
                    <label className="label">Descripción</label>
                    <textarea onChange={onInputChange} name="description" value={game.description}/>
                </div>
                <div className="item">
                    <label className="label">Imagen</label>
                    <input onChange={onInputChange} name="image" type="text" value={game.image}/>
                </div>
                <div className="item">
                    <label className="label">Fecha de Lanzamiento</label>
                    <input onChange={onInputChange} name="released" type="date" value={game.released}/>
                </div>
                <div className="item">
                    <label className="label">Rating</label>
                    <input onChange={onInputChange} name="rating" type="text" value={game.rating}/>
                </div>
                <div className="item">
                    <label className="label">Generos</label>
                    <div className="scroll">
                    {
                        generos.map((genero, index)=> {
                            return (<div key={index}>
                                        <input type="checkbox" name="genres" onChange={()=>checkOnChange(index)}
                                        value={genero}
                                        />
                                        <label >{genero}</label>
                                    </div>)
                        })
                    }
                    </div>
                </div>
                <div className="item">
                    <label className="label">Plataformas</label>
                    <div className="scroll">
                    {
                        plataformas.map((platf, index)=> {
                            return (<div key={index}>
                                        <input type="checkbox" name="platforms" onChange={()=>checkOnChangePlat(index)}
                                        value={platf}
                                        />
                                        <label >{platf}</label>
                                    </div>)
                        }) 
                    }
                    </div>
                </div>
                <input type="submit" />
            </form>
            <Link to="/home">
                <button>HOME</button>
            </Link>
    </div>
    )
}