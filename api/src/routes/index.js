const { Router } = require('express');
const axios = require('axios');
const res = require('express/lib/response');
const {Videogames, Generos} = require('../db.js');
require('dotenv').config();

// const {key} = require('../.env')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {KEY} = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const datos = async ()=>{
    const arreglo = await axios.get(`https://api.rawg.io/api/games?key=${KEY}`)
    return arreglo.data.results
}
const juegos = async (game)=>{
    const arreglo= await axios.get(`https://api.rawg.io/api/games?search=${game}?&key=${KEY}`)
    // console.log(typeof arreglo)
    if(arreglo){
        if(arreglo.data.results.length>0) return arreglo.data.results
    }
    else throw 'No existe juego'
}

const detail = async (id)=>{
    if(id.length<5){
        const detalle = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${KEY}`)
        return detalle.data
    }
    const juego = await Videogames.findByPk(id)
    return juego
}

const generos = async()=>{
    const generos = await axios.get(`https://api.rawg.io/api/genres?&key=${KEY}`)
    let genre =[]
    for (let i = 0; i < generos.data.results.length; i++) {
        genre.push(generos.data.results[i].name);
        await Generos.create({
            name: generos.data.results[i].name
        })
    }
    return genre
}


router.get('/videogames', async (req, res)=>{
    try{
        const {name}= req.query
        console.log(name)
        if(name){
            const datosJuegos= await juegos(name)
            res.json(datosJuegos)
        }
        else{
            const  datosApi = await datos()
            res.json(datosApi)
        }
    }
    catch(e){
        res.json(e)
    }
})

router.get('/videogames/:id', async(req, res)=>{
    try{
        const {id}= req.params
        const detalleJuego= await detail(id)
        res.json(detalleJuego)
    }
    catch(e){
        res.json(e)
    }
})


router.get('/genres', async(req, res)=>{
    try{
        const generoJuego= await generos()
        res.json(generoJuego)
    }
    catch(e){
        res.json(e)
    }
})

router.post('/videogames', async(req, res)=>{
    try{
        const {name, descripcion, fechaLanzamiento, rating, plataformas, image} = req.body
        const nuevoVideojuego= await Videogames.create({
            name, 
            descripcion,
            fechaLanzamiento,
            rating,
            plataformas,
            image
        })
        console.log(nuevoVideojuego)
        res.json(nuevoVideojuego)
    } 
    catch(e){
        res.json(e)
    }
})

router.post('/videogames/:idJuego/genero/:idGenero', async (req, res)=>{
    try{
        const {idJuego, idGenero} = req.params
        const juego = await Videogames.findByPk(idJuego)
        await juego.addGenero(idGenero)
        res.send(200)
    }
    catch(e){
        res.json(e)
    }
})


module.exports = router;
