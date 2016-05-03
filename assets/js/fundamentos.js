//DECLARACIÓN DE VARIABLES
var carro ='Toyota';
var Color= 'Azul';
var miVariable = 'algo';
var $nombreEspecial =  23;
var a348944323 = 'Variable Con Números';

//Variable Undefined
$('#varUndefined').click(function(){
	var variable;
	console.log(variable === undefined);
});


//IndexOf y CharAt
$('#indexOfCharAt').click(function(){
	var texto1='hola mundo';
	var texto2='hola Mundo';
	var texto3='hola MUNDO MUNDO';

	var busqueda='MUNDO';
	console.log(texto3.indexOf(busqueda));

	console.log(texto3.charAt(5));
});

//Redondeos
Math.round(1.1);
Math.floor(1.1);
Math.ceil(1.1);

//Arrays
var arrLista = [1,'Pedro',42,23,5,20,3,function(a,b){return a+b}];

$('#arrTostring').click(function(){
	console.log(arrLista);
	console.log(arrLista.toString());
});

$('#arrPushUnshift').click(function(){
	arrLista.push('Último');
	arrLista.unshift('Primero');
	console.log(arrLista);
});

$('#arrPopShift').click(function(){
	arrLista.pop(); //Delete Last
	console.log(arrLista);

	arrLista.shift(); //Delete First
	console.log(arrLista);
});

var arrSplice = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
$('#arrSplice').click(function(){
	var aux = arrSplice;
	var x = aux;
		x = x.splice(1,3);

	console.log('arrSplice',arrSplice);
	console.log('aux',aux);
	console.log('x',x);
	console.log('---------------');
});

$('#arrSort').click(function(){
	var ordenado=arrLista.sort(); //Ordena
	console.log(arrLista.sort());
});

$('#arrSortAsc').click(function(){
	var ordenado=arrLista.sort(function(a,b){
		return a-b;
	}); //Ordena Ascendente
	console.log(ordenado);
});

$('#arrSortRandom').click(function(){
	var ordenado=arrLista.sort(function(a,b){
		
		return Math.random() - 0.5;
	}); //Ordena Random
	console.log(ordenado);
});

$('#arrReverse').click(function(){
	var x=arrLista.reverse();
	console.log(x);
});

$('#arrConcat').click(function(){
	var x = [1,2,3,4]
	var y = [4,2,5,6];
	var z = x.concat(y);
	console.log('x:',x);
	console.log('y:',y);
	console.log('z:',z);
});

$('#arrSlice').click(function(){
	var x= arrLista.slice(1,4);
	console.log(x);
});

$('#arrJoin').click(function(){
	var x= arrLista.join();
	console.log(x);

	var x= arrLista.join(' ');
	console.log(x);
});

//FUNCIONES

$('#anonym').click(function(){

	(function(a,b,c){
		console.log(a,b,c);
	})('d','e','f')

});

//PROTOTIPOS

var oPersona={
	id: 0,
	nombre: 'Anónimo',
	apellido: 'Anónimo',
	saludo: function(){
		return 'Buenos días, '+this.nombre +' ' +this.apellido;
	},
	despedida:function(){
		return 'Buenas noches, '+this.nombre+' '+this.apellido;
	}
};


$('#prototype').click(function(){
	// function Persona(nombre,apellido){
	// 	this.nombre= nombre;
	// 	this.apellido=apellido;
	// }
	// Persona.prototype=protPersona;

	// var Juan = new Persona('Juan');
	// var fun = $f.prototype(protPersona);
	var Juan = new ($f.prototype(oPersona))({
		nombre: 'Juan',
		apellido: 'Pérez',
		id:1,
		direccion:'Av. 28 de Julio 9283'
	});


	// Juan.saludo();
	for (var index in Juan){
		if(typeof Juan[index] !='function'){
			console.log(index+':',Juan[index]);
		}
		
		else{
			var ret=(Juan[index])();
			console.log(index+':',ret);
		}
	}
});

//MENSAJES

$('#alert').click(function(){
	var input=prompt('Ingrese valor','');
	console.log(input);
});

// $('#').click(function(){

// });
