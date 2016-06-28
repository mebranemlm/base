
var sw=true;
$(document).ready(function(){
	$('#accion').click(function(){
		var x=$('#texto');
		//animar2(x);
		//
		$('#content').load('http://facebook.com');

		// $('#texto').fadeToggle('slow');
		// if(sw){
		// 	f4();
		// }else{
		// 	f5();
		// }
		// sw=!sw;
	});
	$('button[id=accion1]:first').click(f6);
	$('button[id=accion2]:first').click(f7);
		$('button:');
	inicializar();
});



var inicializar=function(){
	var x=$('#texto');
	x.css('width','200px');
	x.css('height','200px');
	x.css('background-color','blue');
	x.css('border','1px solid');

	var y=$('#abajo');
	y.css('width','200px');
	y.css('height','200px');
	y.css('background-color','yellow');
	y.css('border','1px solid');
}
var f1=function(){
	$('li').each(function(i){
		console.log(`${i} : ${$(this).text()}`);
		$(this).css('background-color','yellow');
		if($(this).is('[attr=stop]')){
			return false;
		}
	});
};

var f2=function(){
	document.getElementById('content').innerHTML="<li>Elemento Agregado</li>";
	$('li').css('background-color','red');
};

var f3=function(){
	var x=$('#texto:first');
	x.css('background-color','black');
	x.css('padding','5px');
	//x.css('-webkit-border-radius','1px');
	//x.html('<li>Esto es un LI</li>');
	x.append('<li>Esto es otro LI</li>');
	x.after('<li>LI con after</li>');
	$('li').css('color','red');
};

var f4=function(){
	var x=$('#texto');
	x.hide('slow');
};

var f5=function(){
	var x=$('#texto');
	x.show('slow');
};

var f6=function(){
	var x=$('#texto');
	x.fadeIn('slow');
}

var f7=function(){
	var x=$('#texto');

	x.fadeOut('slow');
}

var animar1=function(){
	$('#texto').animate({height:1000,width:1000},1000);
	//$('#texto').animate({width:1000},'slow');

	$('#texto').animate({height:500,width:500},1000);
	//$('#texto').animate({width:500},'slow');

	$('#texto').animate({height:250,width:250},1000);
	//$('#texto').animate({width:250},'slow');

	$('#texto').animate({height:100,width:100},1000);
	//$('#texto').animate({width:100},'slow');
}

var animar2=function(el){
	el.animate({
		height:500,
		width:500,
		"background-color": "green"
	},2*1000);

	el.animate({
		height:100,
		width:100,
		"background-color": "green"
	},2*1000);

}