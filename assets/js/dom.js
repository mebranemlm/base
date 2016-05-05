

function $(q){

	return document.querySelector(q);
}

$('#remover').addEventListener('click',function(){
	 let els=document.querySelectorAll('button');
	$f.dom.removeNode.first(els);
});