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

$('#arrays').click(function(){
	arrLista = [1,'Pedro',42,function(a,b){return a+b}];
	console.log(arrLista);
	console.log(arrLista.toString());

	arrLista.push('Último');
	arrLista.unshift('Primero');

	console.log(arrLista);

	arrLista.pop(); //Delete Last
	console.log(arrLista);

	arrLista.shift(); //Delete First
	console.log(arrLista);
});
