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

var arr=[1,2,3,4,5,6,7,8,9,10];
$('#arrFilter').click(function(){
	console.log(arr);
	var filt=arr.filter(function(num){
		return num%2==0;
	});

	console.log(filt);
});

$('#arrMap').click(function(){
	console.log(arr);
	var map=arr.map(function(num){
		return num*num;
	});

	console.log(map);
});

$('#arrForEach').click(function(){
	console.log('array',arr);
	arr.forEach(function(el,pos,arr){
		console.log('el',el,'pos',pos,'arr',arr);
	});
});

 var letras=['H','o','l','a',' ','M','u','n','d','o'];

$('#arrReduce').click(function(){
	var palabra=letras.reduce(function(prev,act,pos,arr){
 		console.log(pos, prev,act);
 		return prev+act;
 	});
 	console.log(palabra);
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

//MANIPULANDO EL DOM
$('#dom').click(function(){
	var btn=document.querySelectorAll('button');
	//console.log(btn);
	for (var index in btn){
		//console.log(this.classList.length);
		if(this.classList.length==0){
			console.log(this.className);
			this.className=this.className+' btn-azul';
		}else{
			this.classList.add('btn-azul');
		}
	}

});

$('#tmpString').click(function(){

	tagged`Suma
	${2+1}
	Resta
	${2-1}
	`;

	function tagged($str,$var,$var2){
	console.log('string',$str);
	console.log('var',$var,$var2);
	}

	tmpString=`Suma
	${2+1}
	Resta
	${2-1}
	`;

	console.log('tmpString',tmpString);
});


$('#arrArrow').click(function(){

console.log(arr);

arr2=arr.map(n => n*n);
arr3=arr.map(n => {
	var m=n+1;
	return m*2;
});

console.log(arr2);
console.log(arr3);
});

$('#class').click(function(){
	'use strict';
	// class Humano{

	// }
	// class Tutor extends Humano{
	class Tutor {
		constructor(nombre, apellido){
			this.nombre=nombre;
			this.apellido=apellido;
		}

		fullName(){
			return this.apellido+' '+this.nombre;
		}
	}

	var tutor=new Tutor('José','Pérez');
	console.log(tutor);
	console.log(tutor.fullName());
});

$('#let').click(function(){
	var letNombre='José';
	console.log('ini',letNombre);
	if(true){
		let letNombre='Juan';
		console.log('dentro',letNombre);
	}
	console.log('fuera',letNombre);
});

$('button[id]').each(function(){
	var id=$(this).attr('id');
	$(this).text(id);
});


var contador={
    press:0,
    down:0,
    up:0
}
var blur=document.getElementById('blur');

blur.addEventListener('blur',function(){
    console.log('Blur activado');
    this.style['background-color']='red';
});

blur.addEventListener('focus',function(){
    console.log('Focus activado');
    this.style['background-color']='green';
});

blur.addEventListener('keypress',function(){
    //console.log(`Keypress activado, tecla ${this.value}`);
    contador.press++;
    this.style['background-color']='yellow';
});

blur.addEventListener('keydown',function(){
    //console.log(`Keydown activado, tecla ${this.value}`);
    contador.down++;
    this.style['background-color']='black';
});

blur.addEventListener('keyup',function(){
    //console.log(`Keyup activado, tecla ${this.value}`);
    contador.up++;
    this.style['background-color']='orange';
});

//OTROS EVENTOS

document.getElementById('other_events').addEventListener('click', function(){
	console.log(`navigator.platform: ${navigator.platform}`);
	console.log(`others: win32, MacIntel`);
});

//MANEJO DE ERRORES

$('#errors').click(function(){
	try{
		let numero=prompt('Mensaje');
		if(!$f.math.isInt(numero)){
			// console.log('No es entero');
			throw new Error('No es un entero');
		}
		//console.log(numero%1==0);
		console.log(numero);
	}catch(e){
		console.log(e.message);
	}

});


//Manejo de Errores

// $('#').click(function(){

// });
