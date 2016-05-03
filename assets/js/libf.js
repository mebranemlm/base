

$('#random').click(function(){
	var total=10000;
   	var suma=0;
	for (var i = 0; i < total; i++) {
		var random=$f.math.random({min:1,max:total,type:'int'});	
		suma=suma+random;
	}

	console.log(suma/total);	
	
});