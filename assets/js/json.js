var jPersona={
	"nombre": "Juan",
	"apellido":"Pérez",
	"saludo": function(){
		console.log(`Buenos días, ${this.nombre} ${this.apellido} `);
	}
};

var jComplejo={
	"Personas":[
		{"nombre": "Juan", "apellido": "Perez", "edad": 23},
		{"nombre": "Raul", "apellido": "Gomez", "edad": 31},
		{"nombre": "Pedro", "apellido": "Rosales", "edad": 41}
	]
}

var oPersona={
	nombre: 'Pedro',
	apellido: 'Torres',
	saludo: function(){
		//console.log(`Buenos días ${this.nombre} ${this.apellido} `);	
		console.log('Buenos días, '+ this.nombre + ' '+ this.apellido);
	}
}

console.log(jPersona);
jPersona.saludo();
console.log(oPersona);
oPersona.saludo();

console.log(jPersona==oPersona);


console.log(jComplejo);
console.log(`Nombre: ${jComplejo.Personas[0].nombre}, Apellido: ${jComplejo.Personas[0].apellido}, Edad: ${jComplejo.Personas[0].edad}`);