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
    const arreglo1 = await axios.get(`https://api.rawg.io/api/games?key=${KEY}`)
    const arreglo2 = await axios.get(arreglo1.data.next)
    const arreglo3 = await axios.get(arreglo2.data.next)
    const arreglo4 = await axios.get(arreglo3.data.next)
    const arreglo5 = await axios.get(arreglo4.data.next)
    
    const arr1= arreglo1.data.results.concat(arreglo2.data.results)
    const arr2= arr1.concat(arreglo3.data.results)
    const arr3= arr2.concat(arreglo4.data.results)
    const arr4= arr3.concat(arreglo5.data.results)
    const infoSimpleApi = arr4.map(function(datos) {const info={
        id: datos.id,
        name: datos.name,
        genres: datos.genres.map(genero=> genero.name),
        image: datos.background_image
    } 
    return info
    }
    )
    let juegosDB = await Videogames.findAll()
    // const concatenar = juegosDB.concat(simple)
    let allGames = [...juegosDB, ...infoSimpleApi]
    // let allGames = [...infoSimpleApi]
    // return infoSimpleApi
    return allGames
}           ///id, name, released, rating, genres, platforms, reviews_text_count, background_image, 

const juegos = async (game)=>{
    let busquedaApi = await axios.get(`https://api.rawg.io/api/games?search=${game}?&key=${KEY}`)
    const infoSimpleApi = busquedaApi.data.results.map(function(datos) {const info={
        id: datos.id,
        name: datos.name,
        genres: datos.genres,
        image: datos.background_image
        }    
        return info
        })
    let juegosDB = await Videogames.findAll()
    let allGames = [...juegosDB, ...infoSimpleApi]
    if(allGames){
            const total = await allGames.filter(item=>item.name.includes(game))
            if(total.length>0){
                return total
            }
            else throw 'No existe juego'
        // return arreglo.data.results
    }
}

const detail = async (id)=>{
    if(id.length<7){
        const detalle = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${KEY}`)
        const infoSimpleApi = {
                id: detalle.data.id,
                name: detalle.data.name,
                descripcion: detalle.data.description_raw,
                rating: detalle.data.rating,
                genres: detalle.data.genres,
                platforms: detalle.data.platforms,
                image: detalle.data.background_image,
                fechaLanzamiento: detalle.data.released
                } 
        return infoSimpleApi
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
    // let genre =[]
    const tomarGeneros = await Generos.findAll()
    if(tomarGeneros.length<1){
        for (let i = 0; i < generos.data.results.length; i++) {
            // genre.push(generos.data.results[i].name);
            await Generos.create({
                name: generos.data.results[i].name
            })
        }
        const generoDB=Generos.findAll()
        return Generos.findAll()
        // return genre
    }
    return generos.data.results
}


router.get('/videogames', async (req, res)=>{
    try{
        const {name}= req.query
        if(name){
            const datosJuegos= await juegos(name)
            console.log(datosJuegos)
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
        let buscarDB = await Videogames.findOne({
            where:{
                name:name
            },})
        if(buscarDB){
            throw 'Juego en existencia'
        }
        const generoGuardar= await Generos.findAll({where:{
            name:genero
        }})
        const nuevoVideojuego= await Videogames.create({
            name, 
            descripcion,
            fechaLanzamiento,
            rating,
            plataformas,
            image,
        })
        nuevoVideojuego.addGenero(generoGuardar)
        res.json(nuevoVideojuego)
    } 
    catch(e){
        res.json(e)
    }
})

module.exports = router;
