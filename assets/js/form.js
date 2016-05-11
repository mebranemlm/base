window.onload=function(){

	var oInputs={
		inputs: document.querySelectorAll('input'),
		selects:document.querySelectorAll('select'),
		textareas:document.querySelectorAll('textarea')
	}
	
	var inputs_width=oInputs.inputs.item(0).offsetWidth;
	//console.log(inputs_width);
	var inputs_exceptions=['checkbox','radio','submit','reset'];
	for (var index in oInputs){
		let value=oInputs[index];
		for (var i = 0; i < value.length; i++) {
			let type=value.item(i).getAttribute("type");
			if(inputs_exceptions.indexOf(type)<0){
				value.item(i).style.width=`${inputs_width}px`;
			}
	  	}
	}

	var labels=document.querySelectorAll('label');
	for (var i = 0; i < labels.length; i++) {
		let label=labels.item(i);
		let text=label.innerHTML.trim();
		let last_char=text.substr(text.length-1,1);
		if(last_char!=':'){
			text=text+':';
			labels.item(i).innerHTML=text;
		}
	}

	iniciarFormulario();
}

function iniciarFormulario(){
	for (var i = 0; i < document.forms.length; i++) {
		//console.log(document.forms[i]);
		document.forms[i].onsubmit=function(){return validarFormulario();}
	}
}

function validarFormulario(){
	var todoOk=true;
	// let tags=document.getElementById("*");
	let tags=document.querySelectorAll("*[id]");
	// console.log(tags);
	// return false;
	for (var i = 0; i < tags.length; i++) {
		if(!validarTag(tags[i])){
			todoOk=false;
		}
	}
	return todoOk;

	function validarTag(tag){
		var sobreClass='';
		var classes=tag.className.split(' ');
		// console.log(classes);
		// return false;
		for (var i = 0; i < classes.length; i++) {
			sobreClass += validarTipoClass(classes[i]);
		}
		tag.className=sobreClass;
		if(sobreClass.indexOf('invalido')>-1){
			//console.log('test');
			invalidLabel(tag.parentNode.parentNode.children[0].children[0]);
			tag.focus();
			if(tag.nodeName=='INPUT'){
				tag.select();
			}
			return false;
		}
		return true;

		function validarTipoClass(clase){
			var classReturn='';
			//console.log(clase);
			switch(clase){
				case '':
				case 'invalido':
				classReturn='invalido';
					break;
				case 'req':
					if(todoOk && tag.value==''){
						classReturn='invalido ';
						//console.log('ES INVALIDO-----------');
					}
					classReturn+=clase;
					break;
				default:
					classReturn+=clase;
			}
			//console.log(classReturn, tag.value);
			return classReturn;
		}

		function invalidLabel(lbl){
			//console.log(lbl);
			lbl.style.color='red';
		}
	}
}