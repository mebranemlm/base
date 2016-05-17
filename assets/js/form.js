document.querySelector('#v1').addEventListener('click',function(){

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
});









function iniciarFormulario(){
	for (var i = 0; i < document.forms.length; i++) {
		//console.log(document.forms[i]);
		document.forms[i].onsubmit=function(){return validarFormulario();}
	}
}

function validarFormulario(){
	var todoOk=true;
	// let tags=document.getElementById("*");
	let tags=document.querySelectorAll("form tr>td>*");

	//console.log(tags);

	for (var i = 0; i < tags.length; i++) {
		if(!validarTag(tags[i])){
			todoOk=false;
		}
	}
	//alert(todoOk);
	return todoOk;

	function validarTag(tag){
		var sobreClass='';
		var classes=tag.className.split(' ');
		//console.log(tag.id, classes);
		// return false;
		for (var i = 0; i < classes.length; i++) {
			let aux=validarTipoClass(classes[i]);
			//console.log(tag.id,aux);
			sobreClass += aux;
		}
		tag.className=sobreClass;
		sobreClass=sobreClass.split(' ');
		let lbl=tag.parentNode.parentNode.children[0].children[0];
		if(sobreClass.indexOf('invalido')>-1){
			//console.log('test');
			invalidLabel(lbl);
			tag.focus();
			if(tag.nodeName=='INPUT'){
				tag.select();
			}
			return false;
		}
		validLabel(lbl);
		return true;
		

		function validarTipoClass(clase){
			var classReturn='';
			//console.log(clase);
			switch(clase){
				case '':
				case 'invalido':
				//classReturn+='';
					break;
				case 'req':
					if(todoOk && tag.value==''){
						classReturn='invalido ';
					}
					classReturn+=clase+' ';
					break;
				case 'radio':
					if(todoOk && radioElegido(tag.name)){
						classReturn='invalido ';
					}
					classReturn+=clase+' ';
					break;
				default:
					classReturn+=clase+' ';
			}
			//console.log(classReturn, tag.value);
			return classReturn;
		}

		function invalidLabel(lbl){
			//console.log(lbl);
			// let clases=lbl.className;
			// clases=clases.split(' ');
			// let pos=clases.indexOf('invalido');
			// if(pos<0){
			// 	lbl.className='invalido '+lbl.className;
			// }
			$f.dom.class.add(lbl,'invalido');
		}

		function validLabel(lbl){
			//console.log(lbl);
			//
			if(lbl!=null){
				// let c='invalido';
				// lbl.className=lbl.className.replace(new RegExp('\\b' + c + '\\b'),'');
				
				$f.dom.class.remove(lbl,'invalido');


			}
			
		}
	}
}


document.getElementById('v2').addEventListener('click',function(){
	val2();
});


function val2(){
	// console.log('val 2');
	
	var tags=document.querySelectorAll('form *');
	//var labels=document.querySelectorAll('form label');
	var sw=true;
	for (var i in tags){
		let tag=tags[i];
		if(tag.nodeName=='INPUT'){
			let label=document.querySelector(`form label[for="${tag.id}"]`);
			console.log(tag);
			console.log(label);
			sw=validarInput(tag);
			if(!sw){
				$f.dom.class.add(tag, 'invalido');
				$f.dom.class.add(label, 'invalido');

			}else{
				$f.dom.class.remove(tag, 'invalido');
				$f.dom.class.remove(label, 'invalido');
			}
		}
		//console.log(tags[i].nodeName);
	}

	function validarInput(input){
		var req=input.getAttribute('required');
		if(req==null){
			return true;
		}

		let val=input.value.trim();

		if(val!=''){
			let type=input.type.toLowerCase();
			let sw=false;
			switch(type){
				case null: 
				case 'text': sw=true; 
					break;
				case 'email': sw=$f.validate.isEmail(val); 
					break;

			}

			return sw;
		}
		return false;
	}
}