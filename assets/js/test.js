var qInput='input[type=email][name="emails[]"]';
function inputEmail(){
	let input=document.createElement('input');
	input.setAttribute('type','email');
	input.setAttribute('name','emails[]');
	let inputs=document.querySelectorAll(qInput);
	let length=inputs.length;
	input.setAttribute('title','email-'+length)
	input.setAttribute('i',length);
	input.setAttribute('placeholder','Email N° '+(length+1));
	return input;
}

var input = inputEmail();
var btnMore=document.createElement('button');
btnMore.setAttribute('name','btnMore');
btnMore.innerHTML='+';

var btnLess=document.createElement('button');
btnLess.setAttribute('name','btnLess');
btnLess.innerHTML='-';

var br=$f.dom.br();

//var div=document.querySelector('#emails');
//console.log($f.$);
var div =$f.$('#emails');
div.appendChild(btnMore);
div.appendChild(btnLess);
div.appendChild(br);
div.appendChild(input);

btnMore.addEventListener('click',function(){
	// console.log(qInput);
	let inputs=document.querySelectorAll(qInput);
	if(inputs.length<10){
		let input=inputEmail();
		div.propendChild(input);
	}
});
// console.log(qInput);
btnLess.addEventListener('click',function(){
	let inputs=document.querySelectorAll(qInput);
	let q=`${qInput}[i="${inputs.length-1}"]`;
	// q=q.toString();
	let input=document.querySelector(q);
	if(input!=null && inputs.length>1){
		div.removeChild(input);
	}
});

// var input= $f.dom.input();
// console.log(input);

var i=0;
$('span.index').each(function(){
	i++;
	$(this).css('color','blue');
	$(this).append('<sup><a href="#">'+i+'</a></sup>');
});


function click_paginador_fb(){
	var paginador=$('a.UFIPagerLink');
	for (i=0; i<100;i++){
		setTimeout(function(){
			paginador.click();
		},1000);
	}

	var k=0;
	var paginador=$('a.UFIPagerLink');
	while(k<1000){
		// setTimeout(function(){
		// 	paginador.click();
		// },1000);
		console.log('before',k);
		paginador.click();
		// setTimeout(function(){
		// 	console.log('contando',k);
		// },4000);
		k=k+1;
	}

	var i = 1;                     //  set your counter to 1
	//var paginador=$('a.UFIPagerLink');
	var paginador=document.querySelector('a.UFIPagerLink');
	function myLoop () {           //  create a loop function
	   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
	      // alert('hello');          //  your code here
	      paginador.click();
	      console.log('i',i);
	      i++;                     //  increment the counter
	      if (i < 1000) {            //  if the counter < 10, call the loop function
	         myLoop();             //  ..  again which will trigger another 
	      }                        //  ..  setTimeout()
	   }, 50)
	}

	myLoop();   
}