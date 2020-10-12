const express = require('express');
const app = express();
const {pokemon} = require('./pokedex.json');

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
	res.send("Bienvenido al Pokedex");
});

app.get("/pokemon/all", (req, res, next) => {
	res.status(200);
	res.send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
	const id = req.params.id - 1;
	if(id >= 0 && id <= 150){
		res.status(200);
		res.send(pokemon[req.params.id -1]);
	}

	else{
		res.status(404);
		res.send("Pokemon no encontrado")
	}
	
});

app.get('/pokemon/:name', (req, res, next) =>{
	const name = req.params.name;
	for(i = 0; i < pokemon.length; i++){
		if(pokemon[i].name == name){
			res.status(200);
			res.send(pokemon[i]);
		}
	}

	res.status(404);
	res.send("Pokemon no encontrado");
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server is running');
});