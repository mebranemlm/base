var parseXml;
var $xml;

if (window.DOMParser) {
    parseXml = function(xmlStr) {
        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
    };
} else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXml = function(xmlStr) {
        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
    };
} else {
    parseXml = function() { return null; }
}

// var xmlDoc = parseXml("<foo>Stuff</foo>");
// if (xmlDoc) {
//     window.alert(xmlDoc.documentElement.nodeName);
// }


function requestAjax(){
	let request;
	try{
		request= new XMLHttpRequest();
	}catch(e1){
		try{
			request= ActiveXObject('Msxm12.XMLHTTP');
		}catch(e2){
			try{
				request= ActiveXObject('Microsoft.XMLHTTP');
			}catch(e3){
				request=false;
			}
		}
	}

	return request;
}


var reqAjax=requestAjax();

//console.log(reqAjax);


var cont;
var data;
function onLoad(){
	cont=document.getElementById('cont');
	data=new Array();
}

function test(funcion){
	let request=new requestAjax();
	let response=false;
	
	let data=null;
	request.onreadystatechange =function(funcion){
		if(request.readyState==4 && request.status==200){
			let xml;
			//funcion(xml);
			if(this.responseXML == null){
				xml=parseXml(this.responseText);
				// console.log('responseXML=null',this.responseText);
				console.log('responseXML=null',xml);
			}else{
				xml=this.responseXML;
			}
			try{
				// data=[];
				// data[0]=xml.getElementsByTagName('nombre').item(0).innerHTML;
				// data[1]=xml.getElementsByTagName('edad').item(0).innerHTML;
				// data[2]=xml.getElementsByTagName('pais').item(0).innerHTML;
				// cont.innerHTML=
				// `Nombre: ${data[0]}<br>
				// Edad: ${data[1]}<br>
				// País: ${data[2]}<br>`;
				xml=xml.documentElement.innerHTML;
				//console.log(xml);
				cont.innerHTML=xml;
				//response=xml;
				//funcion(xml);

			}catch(e){
				console.log(e);
				let cont=document.getElementById('cont');
				let err=xml.documentElement.getElementsByTagName('body').item(0).innerHTML;
				//funcion(err);
				cont.innerHTML=err;
				//response=err;
			}
		}


	}

	request.open('GET','http://localhost:8000/base/data/xml/ajax.xml',true);
	request.setRequestHeader('Content-Type', 'text/xml');
	//request.overrideMimeType('text/xml');
	request.send();
	//return response;
}

// var x=test(function(res){
// console.log(res);
// });
//console.log(test());
//
//

function ajax_jq(){
	$.ajax({
		url: 'http://localhost:8000/base/data.php',
		type: 'post',
		data: {
			data: 4123
		}
	}).done(function(res){
		let cont=document.getElementById('cont');
		cont.innerHTML=res;
		let btn=document.getElementById('ajaxjq');
		btn.setAttribute('disabled','');
	}).fail(function(error){
		console.log(error.statusText);
		alert('Ocurrió un error.');
	}).always(function(){
		console.log('Ajax Ejecutado');
	});
}
