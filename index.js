const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

/*
VEERBOS HTTP
GET: OBTENER UN RECURSO
POST: ALMACENAR/CREAR 
PATCH: ACTUALIZACION DE UN RECURSO EN ESPECIFICO X EJEMPLO UN ELEMENTO MODIFICADO 
PUT: ACTUALIZACION DE RECURSOS X EJEMPLO ACTUALIZAR TODOS LOS DATOS 
DELETE: BORRAR DATOS
*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get("/", (req, res, next) => {
	return res.status(200).json({ code: 1, message: "Bienvenido al Pokedex"});
});

app.use("/pokemon", pokemon);

app.use((rwq, res, next) => {
	return res.status(404).json({code: 404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server is running');

});