var tienda = {
    nombre: 'Tienda Javascript',
    calcular: function(costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function() {
        var mensaje = 'Hola';
        return mensaje;
    }

};

// console.log(tienda.nombre);
// console.log(tienda.calcular(20,32));
// console.log(tienda.saludar());

var btnSaludar = document.getElementById('btnSaludar');

var btnCondicional = document.getElementById('btnCondicional');

btnSaludar.addEventListener('click', function() {
    // console.log(tienda.saludar());
    for (dato in tienda) {
        console.log(dato, tienda[dato])
    }
});

btnCondicional.addEventListener('click', function() {
    var condicionales = {
        nulo: null,
        vacio: '',
        espacio: ' ',
        verdadero: true,
        falso: false,
        funcion: function() {}
    }

    for (dato in condicionales) {
        if (condicionales[dato]) {
            console.log(dato, condicionales[dato], 'V');
        } else {
            console.log(dato, condicionales[dato], 'F');
        }
    }

    var sinvalor;
    if (sinvalor) {
        console.log('sinvalor', '', 'V');
    } else {
        console.log('sinvalor', '', 'F');
    }

    // if(noexiste){
    // 	console.log('noexiste','', 'V');
    // }else{
    // 	console.log('noexiste','', 'F');
    // }

    //OPERACIÓN TERNARIA
    var condicion = false;
    var ternario = condicion ? 'Verdadero' : 'Falso';
    console.log('El valor ternario es', ternario);
});

var objConstructor = document.getElementById('objConstructor');

function Persona(nombre, apellido) {
    this.nomb = nombre;
    this.apel = apellido;
}

objConstructor.addEventListener('click', function() {
    var persona1 = new Persona('Pedro', 'Torres');
    console.log(persona1);
    console.log(persona1.nomb);
    console.log(persona1.apel);
});

//FORMATO VARIABLES
//Funciones ---> palabra1Palabra2 (CammelCase)
//Variables ---> palabra1_palabra2 (SnakeCase)
//Constantes --> PALABRA1_PALABRA2
