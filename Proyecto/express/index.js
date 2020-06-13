//Server sin express.
// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.status = 200;
//      res.setHeader('Content-type', 'text/plain');
//      res.end('as');
// });

// server.listen(3000, () =>{
//     console.log('Server 0n');
// })

const express = require('express'); //Declara express
const morgan = require('morgan');
const app = express();
//-- SETTINGS --
app.set('port',3000); //config puerto servidor
const puerto = app.get('port'); //devuelve el puerto. ej 3000
app.set('view engine', 'ejs'); //inicializa ejs
//-- MIDDLEWARES --
app.use(express.json()); // Inicializa express para usar json.
app.use(morgan('dev'));
// app.use(express.static('public')); //carga el template de la carpeta public

//Middleware log, similar a morgan
// function log (req,res,next)
// {
//     console.log(`Ruta recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }
// app.use(log);

// --- ROUTES ----
app.all('/usuario/:asd',(req,res,next)=>{
    console.log('Funcion all');
    next(); //Salta a la siguiente función
})

app.get ('/', (req, res) =>{ 
    const data = [{name:'jhonymelavo'},{name:'jhonymensucio'},{name:'jhonypeligro'}];
    res.render('index.ejs', {jipis: data});

})
app.post('/usuario', (req, res) =>{
    res.send('POST COMPLETED');
    console.log(req.body); //Añadimos esta línea para ver el objeto recibido en consola
})
app.delete('/usuario/:userID',(req,res) =>{
 res.send(`Usuario con la id  ${req.params.userID} ha sido borrado`);
})
app.put('/usuario/:ID',(req,res) =>{
    console.log(req.body);
    res.send(`Usuario con la id  ${req.params.ID} ha sido actualizado`);
   })
// -- LISTENER --
app.listen(puerto, () =>{ 
    console.log('Server on port',puerto); // pone a trabajar el server en el puerto 3000 del host local
})