const express = require('express');
const app = express();

/*
VEERBOS HTTP
GET: OBTENER UN RECURSO
POST: GUARDAR O PUBLICAR ALGO
PATCH: ACTUALIZACION DE UN RECURSO EN ESPECIFICO X EJEMPLO UN ELEMENTO MODIFICADO 
PUT: ACTUALIZACION DE RECURSOS X EJEMPLO ACTUALIZAR TODOS LOS DATOS 
DELETE: BORRAR DATOS
*/

app.get("/", (req, res, next) => {
	res.status(200);
	res.send("Bienvenido");
});

app.listen(3000, () => {
	console.log('Server is running');
});