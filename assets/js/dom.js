

function $(q){

	return document.querySelector(q);
}

$('#remover').addEventListener('click',function(){
	 let els=document.querySelectorAll('div>.hijos');
	$f.dom.node.remove.last(els);
});