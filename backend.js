var basededatos = {
	usuario: "Jhon",
	password: "galletas"
};


console.log("Oh por dios se programar backend");

//require es una instruccion del js que corre del lado del servidor nodeJS
var express = require("express");
//metemos la libreria en la var web
var web = express();
//Variable que contiene el body-parser
var parcero = require("body-parser");
//Los algoritmos que hacen parse convierten de un tipo de datos a otro
//Le decimos a express que use el sistema de codificacion de parse :)
// web.use(parcero.urlencoded());
web.use(parcero.urlencoded({extended:true}))
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
	//Así enviamos un archivo html para que se abra en el navegador.
	//Para ver los cambios en archivos estaticos no necesitamos reiniciar el navegador
	res.sendfile("formulario.html");
});

web.post("/entrar", function(req, res) {
	/*Acá llegan los datos
	console.log(req.body);
	Siempre debemos enviar algo
	res.send("U R Inside ( ͡° ͜ʖ ͡°)");*/

	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password){

		res.send("U R Inside ( ͡° ͜ʖ ͡°)");

	}
	else{

		res.send("Su usuario o contraseña no son correctos.");

	}

});




//Pruebas
web.get("/test", function(req, res) {
	/*res.send = enviar una respuesta
	Esto nos despliega una variable json en la consola (server)
	console.log(req);
	en una sub variable res.query vamos a encontrar las variables que
	enviamos por GET*/
	res.send("Los datos que escribimos en el GET son: dia = "+req.query.dia+" mes = "+req.query.mes);
	/*Acá enviamos variables por medio de get
	http://localhost:8080/test?dia=lunes&mes=06*/
});

web.get("/BuhoMachine/faq", function(req, res) {
	res.send("Le <strong>faq</strong> :3");
});

/*
Tuvimos que instalar body-parser (antes instalamos express usando npm tambien)
➜  node git:(master) ✗ npm install body-parser
/home/jhon
├─┬ body-parser@1.15.1 
│ ├── bytes@2.3.0 
│ ├── http-errors@1.4.0 
│ ├── iconv-lite@0.4.13 
│ ├── qs@6.1.0 
│ └── raw-body@2.1.6 
├── express@4.13.4 
└── passport@0.3.2 
*/

/*Esto nos sale despues de instalar el body-parser
(en el server)
body-parser deprecated undefined extended: provide extended option backend.js:17:17*/

/*y al entrar sale
express deprecated res.sendfile: Use res.sendFile instead backend.js:34:6
acá debajo estan las variables :)
{ usuario: 'Jhon', clave: 'jajaj', enviar: 'Entrar' }*/

/*acá estan todos los modulos que tengo instalados
/usr/local/lib/node_modules*/
