var dias=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var hours_more=0;

$('#date_today').item(0).addEventListener('click',function(){

	var ahora=new Date();
	console.log(ahora);
	console.log('Día:\n',dias[ahora.getDay()]);
	console.log('N°:\n',ahora.getDate());
	console.log('Mes:\n',meses[ahora.getMonth()]);
	console.log('Año:\n',ahora.getFullYear());

});

$('#hour_today').item(0).addEventListener('click',function(){
	mostrarHora();
});

$('#add_hour').item(0).addEventListener('click',function(){
	hours_more++;
	//mostrarHora();
});

$('#rest_hour').item(0).addEventListener('click',function(){
	hours_more--;
	//mostrarHora();
});

function mostrarHora(){
	
	setTimeout("mostrarHora()",1000);
	let hoy=new Date();
	hoy.setHours(hoy.getHours()+hours_more);
	let html=getHour(hoy)+getMinute(hoy)+getSecond(hoy)+getAmPm(hoy);

	function getHour($date){
		let hour=$date.getHours();
		if(hour==0){
			return 12;
		}
		if(hour<13){
			return hour;
		}
		return hour-12;
	}

	function getMinute($date){
		let min=$date.getMinutes();
		if(min>9){
			return `:${min}`;
		}
		return `:0${min}`;
	}

	function getSecond($date){
		let sec=$date.getSeconds();
		if(sec>9){
			return `:${sec}`;
		}
		return `:0${sec}`;
	}

	function getAmPm($date){
		let hour=$date.getHours();
		if(hour>12){
			return ' pm';
		}
		return ' am';
	}
	console.clear();
	console.log(html);
	//$('#_hour_today').item(0).innerHTML=html;
}



var dtToday = new Date();
var dtTomorrow= new Date();
	dtTomorrow.setDate(dtTomorrow.getDate()+1);
	dtTomorrow.setMonth(dtTomorrow.getMonth()+21);


console.log(dtToday);
console.log(dtTomorrow);

var unixToday=dtToday.getTime();
var unixTomorrow=dtTomorrow.getTime();

console.log(unixToday);
console.log(unixTomorrow);

var daysToday = unixToday/(1000*60*60*24);
var daysTomorrow = unixTomorrow/(1000*60*60*24);

var monthsToday = unixToday/(1000*60*60*24*30);
var monthsTomorrow = unixTomorrow/(1000*60*60*24*30);

console.log('Diferencia de días: ',daysTomorrow-daysToday);
console.log('Diferencia de meses: ',monthsTomorrow-monthsToday);