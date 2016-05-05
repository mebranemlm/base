
var $f={
	$:function(q){
		let el=document.querySelector(q);
		el.propendChild=function(e){
			el.insertBefore(e,el.firstChild);
		}
		return el;
	},
	a: {
		/**
		 * [Objeto con diversas funciones y variables
		 * referentes a los enlaces externos]
		 * @type {Object}
		 */
		external: {
			/**
			 * Función que edita los targets de los enlaces
			 * externos que no tengan uno definido
			 * @param  {string} $target [Valor que se asignará a los targets]
			 * @return {[type]}         [description]
			 */
			target: function($target){
				if(typeof $target=='undefined'){
					$target='_blank';
				}
				var main_url=document.location.href;
				var main_host=$f.url.host(main_url);
				let a=document.querySelectorAll('a[href]');
				for (var i = 0; i < a.length; i++) {
					var el=a[i];
					// var url = el.getAttribute('href');
					var url = el.href;
					// console.log(url);
					var target= el.getAttribute('target');
					var host= $f.url.host(url);
					if($f.url.isAbsolute(url) && main_host!=host && (typeof target=='undefined' || target==null || $f.a.targets.indexOf(target)<0)){
						el.setAttribute('target',$target);
					}
				}
				// $('a[href]').each(function(){
				// 	var el=$(this);
				// 	var url = el.attr('href');
				// 	var target= el.attr('target');
				// 	var host= $f.url.host(url);
				// 	if($f.url.isAbsolute(url) && main_host!=host && (typeof target=='undefined' || $f.a.targets.indexOf(target)<0)){
				// 		// console.log('Es absoluta y tiene un dominio diferente');
				// 		el.attr('target',$target);
				// 	}
				// });
			},
			targets: ['_blank','_self','_parent','_top','framename']
		}
	},
	dom: {
		br: function(){
			return document.createElement('br');
		}
	},
	/**
	 * Función que devuelve la función prototipo
	 * a partir de un objeto
	 * @param  {object} $obj [Objeto con las propiedades que tendrá el prototipo]
	 * @return {function}      [función prototipo]
	 */
	prototype: function($obj){
		function fun($obj){
			for (var index in $obj){
				if(typeof $obj[index]!='undefined'){
					this[index]=$obj[index];
				}
			}
		}
		fun.prototype=$obj;
		return fun;
	},

	url:{
		/**
		 * Devuelve el Host de una url
		 * @param  {string} $url [La url a evaluar]
		 * @return {string}     [El host de la url]
		 */
		host: function ($url) {
  			return $url.toString().replace(/^(.*\/\/[^\/?#]*).*$/,"$1");
		},
		/**
		 * Valida si la url es absoluta o relativa
		 * @param  {string}  $url [La url a evaluarse]
		 * @return {Boolean}      [True si es absoluta, False si no lo es]
		 */
		isAbsolute: function($url){
			var r = new RegExp('^(?:[a-z]+:)?//', 'i');
			return r.test($url);
		}
	},
	math:{
		isInt: function($n){
			return Number($n) == $n && $n % 1 === 0;
		},
		isFloat: function($n){
			return Number($n) == $n && $n % 1 !== 0;
		},
		isNumber: function($n){
			return Number($n) == $n;
		},
		random:function($obj){
			$min=$obj.min;
			$max=$obj.max;
			$type=$obj.type;
			if(typeof $min !='undefined' && $f.math.isNumber($min) && typeof $max !='undefined' && $f.math.isNumber($max)){
				
				var res= Math.random()*($max-$min)+$min;
				if(typeof $type!='undefined' && $type.toLowerCase() ==='int'){
					return parseInt(res);
				}
				return res;
			}else{
				return Math.random();
			}

		}
	}
};


$f.a.external.target();

// $('#stopRefresh').click(function(){
// 	var refresh=$('meta[http-equiv=refresh]');
// 	var content=refresh.attr('content');
// 	console.log(content);
// 	if($f.math.isNumber(content)){
// 		console.log('Es número');
// 		refresh.removeAttr('http-equiv');
// 		refresh.removeAttr('content');
// 		//refresh.attr('http-equiv','');
// 		console.log($('meta[http-equiv=refresh]').attr('http-equiv'));
// 		console.log($('meta[http-equiv=refresh]').attr('content'));
// 	}else{
// 		console.log('No es número');
// 		// refresh.attr('http-equiv','re');
// 		 refresh.attr('http-equiv','refresh');
// 	}
// });


// console.log($f.math.random({
// 	min: 1, 
// 	max: 1000,
// 	type: 'int'
// }));


