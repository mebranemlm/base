function Persona(o,n){this.nomb=o,this.apel=n}var tienda={nombre:"Tienda Javascript",calcular:function(o,n){return o+n},saludar:function(){var o="Hola";return o}},btnSaludar=document.getElementById("btnSaludar"),btnCondicional=document.getElementById("btnCondicional");btnSaludar.addEventListener("click",function(){for(dato in tienda)console.log(dato,tienda[dato])}),btnCondicional.addEventListener("click",function(){var o={nulo:null,vacio:"",espacio:" ",verdadero:!0,falso:!1,funcion:function(){}};for(dato in o)o[dato]?console.log(dato,o[dato],"V"):console.log(dato,o[dato],"F");var n;n?console.log("sinvalor","","V"):console.log("sinvalor","","F");var e=!1,a=e?"Verdadero":"Falso";console.log("El valor ternario es",a)});var objConstructor=document.getElementById("objConstructor");objConstructor.addEventListener("click",function(){var o=new Persona("Pedro","Torres");console.log(o),console.log(o.nomb),console.log(o.apel)}),$("#objJSON").click(function(){$.getJSON("assets/json/productos.json",function(o){for(var n=o.length,e=0;n>e;e++)console.log("Nombre:",o[e].nombre)})}),$("#jsonWeather").click(function(){url_clima="assets/json/clima.json",$.getJSON(url_clima,function(o){console.log(o)})}),$("#fnJoinAndConcat").click(function(){var o=["Mexico","España","Argentina","Chile","Colombia","Venezuela","Perú","Costa Rica"];console.log("Ejemplo JOIN"),console.log(o.join(", ")),console.log("Ejemplo CONCAT"),console.log(o.concat(", "))});var tiempo="Tiempo: ";console.time(tiempo);for(var i=0;100>i;i++)var x=1;console.timeEnd(tiempo);