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


}

