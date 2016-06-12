console.log("Oh por dios se programar backend");

//require es una instruccion del js que corre del lado del servidor nodeJS
var express = require("express");
//metemos la libreria en la var web
var web = express();

var server;

//web escucha a el puerto 8080 y ejecuta una funcion anonima
//Podriamos usar el puerto 80 pero debemos ser administradores (sudo)
server = web.listen(8080, function () {
	//Estamos dentro de una clase anonima
	console.log("The fucking server is running ...");
});

/*El primer / es el home del sitio :D
get es una funcion de express();
el cual usa una funcion anonima que recibe como parametros
req = requirement(requerimiento) y res = response(respuesta)*/
web.get("/", function(req, res) {
	//res.send = enviar una respuesta
	res.send("Vea mano el server web");
});

web.get("/test", function(req, res) {
	//res.send = enviar una respuesta
	//Esto nos despliega una variable json en la consola (server)
	// console.log(req);
	//en una sub variable res.query vamos a encontrar las variables que
	//enviamos por GET
	res.send("Los datos que escribimos en el GET son: dia = "+req.query.dia+" mes = "+req.query.mes);
	//Acá enviamos variables por medio de get
	//http://localhost:8080/test?dia=lunes&mes=06
});

web.get("/BuhoMachine/faq", function(req, res) {
	res.send("Le <strong>faq</strong> :3");
});

