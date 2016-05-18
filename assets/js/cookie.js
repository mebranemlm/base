
window.onload=function(){
	// var fNow=new Date();
	// var fExp= new Date();
	// 	fExp.setMonth(fExp.getMonth()+6);
	// var fDel=new Date();
	// 	fDel.setDate(fDel.getDate()-1);


	// var countVisit=parseInt(cookieVal('countVisit'));
	var countVisit=$f.cookie.val('countVisit');
		if(!countVisit){countVisit='0';}
	countVisit=parseInt(countVisit);
	countVisit++;

	// var lastVisit = cookieVal('lastVisit');
	var lastVisit = $f.cookie.val('lastVisit');
	// if(lastVisit==0){
	// 	lastVisit='';
	// }

	// var cookie={};
	// cookie.key='countVisit';
	// cookie.val=countVisit;
	// $f.cookie.add(cookie);

	$f.cookie.add({
		key:"countVisit",
		val:countVisit
	});


	$f.cookie.add({
		key:"lastVisit",
		val: new Date()
	});

	//$f.cookie.removeAll();

	// document.cookie=`countVisit=${countVisit};path=/;expires=${fExp.toGMTString()}`;
	// document.cookie=`lastVisit=${fNow};path=/;expires=${fExp.toGMTString()}`;
	// document.cookie=`test=EsUnTest;path=/;expires=${fExp.toGMTString()}`;
	// cookieDel('test');
	

	var msg=`Ha visitado esta página ${countVisit} veces.`;

	if(lastVisit){
		msg+=`\n\nSu última visita fue ${lastVisit}`;
	}

	console.log(msg);
	console.log('Convert to Date');
	let last_visit=new Date($f.cookie.val('lastVisit'));
	console.log(last_visit.getMonth());
	console.log(last_visit);
	//console.log(document.cookie);
	//
	// var arrCookie=document.cookie.split('; ');
	// for (var i = 0; i < arrCookie.length; i++) {
	// 	let key=arrCookie[i].split('=')[0];
	// 	$f.cookie.remove(key);
	// }
	
	//$f.cookie.removeAll();
	console.log(document.cookie);
	console.log($f.cookie.format.json());
	console.log($f.cookie.format.object());

	//console.log(arrCookie);
	//$f.cookie.remove('countVisit');

	// function cookieVal(cookieName){
	// 	var cookies=document.cookie.split('; ');

	// 	for (var i = 0; i < cookies.length; i++) {
	// 		if(cookieName==cookies[i].split('=')[0]){
	// 			return cookies[i].split('=')[1];
	// 		}
	// 	}
	// 	return false;
	// }

	// function cookieDel(cookie_key){
	// 	let cookie_val=cookieVal(cookie_key);
	// 	let fDel=new Date();
	// 	fDel.setDate(fDel.getDate()-1);
	// 	if(cookie_val){
	// 		document.cookie=`${cookie_key}=${cookie_val};path=/;expires=${fDel.toGMTString()}`;
	// 	}
	// }

}