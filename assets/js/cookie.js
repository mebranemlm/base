function $(q){
	return document.querySelectorAll(q);
}

window.onload=function(){

	// var fNow=new Date();
	// var fExp= new Date();
	// 	fExp.setMonth(fExp.getMonth()+6);
	// var fDel=new Date();
	// 	fDel.setDate(fDel.getDate()-1);


	// var count_visit=parseInt(cookieVal('count_visit'));
	var count_visit=$f.cookie.val('count_visit');
		if(!count_visit){count_visit='0';}
	count_visit=parseInt(count_visit);
	count_visit++;

	// var last_visit = cookieVal('last_visit');
	var last_visit = $f.cookie.val('last_visit');
	// if(last_visit==0){
	// 	last_visit='';
	// }

	// var cookie={};
	// cookie.key='count_visit';
	// cookie.val=count_visit;
	// $f.cookie.add(cookie);

	$f.cookie.add({
		key:"count_visit",
		val:count_visit
	});


	$f.cookie.add({
		key:"last_visit",
		val: new Date()
	});

	
}

document.getElementById('show_visits').addEventListener('click',function(){
	
	var count_visit=$f.cookie.val('count_visit');
		if(!count_visit){count_visit='0';}
	count_visit=parseInt(count_visit);

	var last_visit = $f.cookie.val('last_visit');

	var msg=`Ha visitado esta página ${count_visit} veces.`;

	if(last_visit){
		msg+=`Última visita:\n${last_visit}`;
	}

	console.log(msg);
	if(last_visit){
		last_visit=new Date(last_visit);
		console.log('Format Date:\n',last_visit);
	}
});

$('#reset_visits').item(0).addEventListener('click',function(){
	$f.cookie.remove('count_visit');
	$f.cookie.remove('last_visit');
});

$('#show_cookies').item(0).addEventListener('click',function(){
	console.log('document.cookie\n',document.cookie);
	console.log('document.cookie:json\n',$f.cookie.format.json());
	console.log('document.cookie:object\n',$f.cookie.format.object());

});

$('#reset_cookies').item(0).addEventListener('click',function(){
	$f.cookie.removeAll();
});

$('#clear_console').item(0).addEventListener('click',function(){
	console.clear();
});