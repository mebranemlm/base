var tienda={
	nombre: 'Tienda Javascript',
	calcular: function(costo1,costo2){
		return costo1+costo2;
	},
	saludar: function(){
		var mensaje = 'Hola';
		return mensaje;
	}

};

// console.log(tienda.nombre);
// console.log(tienda.calcular(20,32));
// console.log(tienda.saludar());

var btnSaludar = document.getElementById('btnSaludar');
 
btnSaludar.addEventListener('click',function(){
 	// console.log(tienda.saludar());
 	for (dato in tienda){
 		console.log(dato,tienda[dato])
 	}
 });