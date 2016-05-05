// function removeNode(els,wich){
// 	let parent=els.item(0).parentNode;
// 	let len=els.length;
// 	let i=0;
// 	if(typeof wich !='undefined' && wich != '')
// 	if(len>1){
// 		parent.removeChild(els.item(els.len-1));
// 	}
// }

function $(q){

	return document.querySelector(q);
}

$('#remover').addEventListener('click',function(){
	 let els=document.querySelectorAll('.hijos');
	$f.dom.removeNode.first(els);
	let _ = 'barra';
	//console.log(_);
	// let padre=document.getElementById('padre')
	// let padre=els.item(0).parentNode;
	// console.log(padre);
	// let len=els.length;
	// if(len>1){
	// 	padre.removeChild(els.item(els.len-1));
	// }
});