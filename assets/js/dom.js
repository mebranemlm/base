
function $(q){
	return document.querySelector(q);
}

$('#remover').addEventListener('click',function(){
	 let els=document.querySelectorAll('div>.hijos');
	$f.dom.node.remove.last(els);
});

$('#agregar').addEventListener('click',function(){
	let sw=$f.dom.node.add.append({
			query:'div>.hijos',
			nodeText:'Botón ${i}',
			nodeId: 'button-${i}'
		});
	// console.log(sw);
});
