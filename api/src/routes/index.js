const { Router } = require('express');
const axios = require('axios')
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

router.get('/videogames', async (req, res)=>{
    try{
        const  datosApi = await datos()
        console.log(datosApi);
        res.json(datosApi)
    }
    catch(e){
        res.json(e)
    }
})

module.exports = router;
