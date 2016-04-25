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


//USANDO JSON

$('#objJSON').click(function(){
    $.getJSON('assets/json/productos.json',function(productos){
        // console.log(productos);
        var totalProductos = productos.length;
        for (var i = 0; i < totalProductos; i++) {
            console.log('Nombre:',productos[i].nombre);
        }
    });
});

$('#jsonWeather').click(function(){
     /**
     * [Fuente: https://developer.yahoo.com/weather/]
     * @type {String}
     * url_clima='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
     */
    url_clima='assets/json/clima.json';
    $.getJSON(url_clima,function(clima){
        console.log(clima);
    });
});

//JOIN vs CONCAT

$('#fnJoinAndConcat').click(function(){

    var pais = ['Mexico', 'España', 'Argentina', 'Chile', 'Colombia', 'Venezuela', 'Perú', 'Costa Rica'];
    
    console.log('Ejemplo JOIN');
    console.log(pais.join(', '));

    console.log('Ejemplo CONCAT');
    console.log(pais.concat(', '));

});