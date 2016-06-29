$(document).ready(function(){

//console.log('test');
e1();

});


function e1(){
	var obj={};
	_.extend(obj,Backbone.Events);
	obj.on('alert',function(msj,el){
		console.log(msj);
		var temp=$('<div>DIV</div>');
		temp.css({
			'background-color': 'white',
			'color': 'red',
			'font-weight':'bold',
			'width': '50px',
			'display':'inline-block',
			'border':'1px solid red',
			'margin':'1px',
			'text-align':'center'
		});
		el.after(temp);

	})

	$('#el1').click(function(){
		obj.trigger('alert','Esto es un mensaje',$(this));
	});
}