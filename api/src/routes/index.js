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
    
    const simple = arreglo.data.results.map(function(datos) {const info={
        id: datos.id,
        name: datos.name,
        released: datos.released,
        rating: datos.rating,
        genres: datos.genres,
        platforms: datos.platforms,
        reviews: datos.reviews_text_count,
        image: datos.background_image
    } 
    return info
    }
    )
    const juegosDB = await Videogames.findAll()
    const concatenar = juegosDB.concat(simple)
    // return arreglo
    return concatenar
    // arreglo.push()
}           ///id, name, released, rating, genres, platforms, reviews_text_count, background_image, 

const juegos = async (game)=>{
    const arreglo= await axios.get(`https://api.rawg.io/api/games?search=${game}?&key=${KEY}`)
    // const arreglo= await axios.get(`https://api.rawg.io/api/games?key=${KEY}`)
    // console.log(typeof arreglo)
    console.log(arreglo.data.results)
    arreglo.push(await Videogames.findOne({
        where:{
            id:id
        }}))
    if(arreglo){
        if(arreglo.data.results.length>0){
            const total = arreglo.data.results.filter(item=>item.name===game)
            return total
        } 
    }
    else throw 'No existe juego'
}

const detail = async (id)=>{
    if(id.length<5){
        const detalle = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${KEY}`)
        return detalle.data
    }
    const juego = await Videogames.findOne({
        where:{
            id:id
        },
        include:[
        {
            model:Generos,
            attributes:["name"]
        }]
    })
    return juego
}

const generos = async()=>{
    const generos = await axios.get(`https://api.rawg.io/api/genres?&key=${KEY}`)
    let genre =[]
    console.log( await Generos.findAll().length)
    const tomarGeneros = await Generos.findAll()
    console.log(tomarGeneros.length)
    if(tomarGeneros.length<1){
        for (let i = 0; i < generos.data.results.length; i++) {
            genre.push(generos.data.results[i].name);
            await Generos.create({
                name: generos.data.results[i].name
            })
        }
        // return genre
        return Generos.findAll()
    }
    return tomarGeneros
}


router.get('/videogames', async (req, res)=>{
    try{
        const {name}= req.query
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
        const {name, descripcion, fechaLanzamiento, rating, plataformas, image, genero} = req.body
        console.log(genero)
        const generoGuardar= await Generos.findAll({where:{
            name:genero
        }})

        console.log(generoGuardar)
        const nuevoVideojuego= await Videogames.create({
            name, 
            descripcion,
            fechaLanzamiento,
            rating,
            plataformas,
            image,
        })
        nuevoVideojuego.addGenero(generoGuardar)
        console.log(nuevoVideojuego)
        res.json(nuevoVideojuego)
    } 
    catch(e){
        res.json(e)
    }
})

module.exports = router;
