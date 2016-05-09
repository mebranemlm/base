var tabla=document.getElementById('tbl-bingo');

//var tr=
for (var i = 0; i < 5; i++) {
	var fila=document.createElement('tr');;
	for (var j = 0; j < 5; j++) {
		var celda=document.createElement('td');
		
		if(i==2 && j==2){
			celda.innerHTML='';
			celda.setAttribute('class','centro');
		}else{
			celda.innerHTML=`${Math.floor(Math.random()*75)+1}`;
		}

		fila.appendChild(celda);
	}		
	tabla.appendChild(fila);
}