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