$('#clear').item(0).onclick=function(){
	console.clear();
}

function clear(){
	console.clear();
}

$('#objString').item(0).onclick=function(){
	clear();
	let str="This is an String";
	let oStr=new String(str);

	console.log(str);
	console.log(oStr);

}

$('#objNumber').item(0).onclick=function(){
	clear();
	let x=123;
	let oX=new Number(x);

	console.log(x);
	console.log(oX);
}

$('#oBoolean').item(0).onclick=function(){
	clear();
	let x=true;
	let oX=new Boolean(x);

	console.log(x);
	console.log(oX);
}

$('#oArray').item(0).onclick=function(){
	clear();
	let x=[1,2,3,4,5];
	let oX=new Array(x);
	let oX2=new Array(1,2,3,4,5);

	console.log(x);
	console.log(oX);
	console.log(oX2);
}

$('#oLit_oCon').item(0).onclick=function(){
	clear();
	//Objeto Literal
	var oLit={
		id: 1,
		nombre:'Juan',
		apellido: 'Pérez',
		edad: 30
	}
	//Objeto Constructor
	var oCon=new Object();
		oCon.id=1;
		oCon.nombre='Juan';
		oCon.apellido='Pérez';
		oCon.edad=30;

	console.log(oLit);
	console.log(oCon);
}

console.log(Math);