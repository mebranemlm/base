
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
	cookie:{
		add: function($cookie_obj){
			if (typeof $cookie_obj.expires=='undefined'){
				var fExp=new Date();
				fExp.setMonth(fExp.getMonth()+6);
				$cookie_obj.expires=fExp;
			}

			if(typeof $cookie_obj.path=='undefined'){
				$cookie_obj.path='/';
			}
			let aux=$cookie_obj.expires;
			$cookie_obj.expires=aux.toGMTString();

			document.cookie=`${$cookie_obj['key']}=${$cookie_obj['val']};path=${$cookie_obj['path']};expires=${$cookie_obj['expires']}`;

		},
		format: {
			object:function(){
				let obj={};
				let cookies=document.cookie.split('; ');
				for (var i = 0; i < cookies.length; i++) {
					let cookie=cookies[i].split('=');
					obj[cookie[0]]=cookie[1];
				}
				return obj;
			},
			json: function(){
				let obj=$f.cookie.format.object();
				return json=JSON.stringify(obj);
			}
		},
		remove: function($cookie_key){
			//let cookie_val=$f.cookie.val($cookie_key);
			let fDel=new Date();
			fDel.setDate(fDel.getDate()-1);
			document.cookie=`${$cookie_key}=;path=/;expires=${fDel.toGMTString()}`;
		},
		removeAll: function(){
			let cookies=document.cookie.split('; ');
			for (let i = 0; i < cookies.length; i++) {
				let key=cookies[i].split('=')[0];
				$f.cookie.remove(key);
			}
		},
		val: function($cookie_key){
			var cookies=document.cookie.split('; ');
			for (var i = 0; i < cookies.length; i++) {
				if($cookie_key==cookies[i].split('=')[0]){
					return cookies[i].split('=')[1];
				}
			}
			return false;
		}
	},
	dom: {
		br: function(){
			return document.createElement('br');
		},
		class:{
			add: function(el,myClass){
				if(!$f.dom.class.has(el,myClass)){
					el.className=`${el.className} ${myClass}`;
				}
			},
			remove: function(el,myClass){
				if(el!=null){
					el.className=el.className.replace(new RegExp('\\b' + myClass + '\\b'),'');
				}
			},
			has:function(el, myClass){
				let arrClasses=el.className.split(' ');
				let pos=arrClasses.indexOf(myClass);
				if(pos<0){
					return false;
				}
				return true;
			}
		},
		node:{
			add:{
				add: function($type,$query,$nodeText,$nodeId){
					let els=document.querySelectorAll($query);
					// console.log(els.length);
					// console.log(els.item(0).getAttribute('hidden'));
					if(els.length>1 || (els.length==1 && els.item(0).getAttribute('hidden') == null) ){
						let el=els.item(0);
						let len=els.length;

						let parent=el.parentNode;
						
						let nodeName=el.nodeName;
						let nodeAttrs=el.attributes;
						// let nodeText='Botón ${i}';
						// let nodeId='button-${i}';
						//let nodeId='';

						let node=document.createElement(nodeName);
						for (var i = 0; i < nodeAttrs.length; i++) {
							let attr=nodeAttrs[i];
							if(attr.name!='id'){
								node.setAttribute(attr.name,attr.value);
							}
						}
						if($nodeText.trim()!=''){
							$nodeText=$nodeText.replace('${i}',(len+1));
						}
						if($nodeId.trim()!=''){
							$nodeId=$nodeId.replace('${i}',(len+1));
							node.setAttribute('id',$nodeId);
						}
						
						node.innerHTML=$nodeText;

						if(typeof $type != 'undefined' && $type!='propend'){
							parent.appendChild(node);
						}else{
							parent.insertBefore(node,parent.firstChild);
						
						}
						return true;
					}else if(els.length==1){
						els.item(0).removeAttribute('hidden');
					}
					return false;

				},
			append: function($obj){
				if(typeof $obj.query=='undefined' || $obj.query==null || $obj.query.trim()=='' ){
					console.log('Query inválido: ',$obj.query);	
					return false;				
				}
				if(typeof $obj.nodeText=='undefined' || $obj.nodeText==null){
					$obj.nodeText='';
				}
				if(typeof $obj.nodeId=='undefined' || $obj.nodeId==null){
					$obj.nodeId='';
				}
				return $f.dom.node.add.add('append',$obj.query,$obj.nodeText,$obj.nodeId);
			},
			propend: function($obj){
				if(typeof $obj.query=='undefined' || $obj.query==null || $obj.query.trim()=='' ){
					console.log('Query inválido: ',$obj.query);	
					return false;				
				}
				if(typeof $obj.nodeText=='undefined' || $obj.nodeText==null){
					$obj.nodeText='';
				}
				if(typeof $obj.nodeId=='undefined' || $obj.nodeId==null){
					$obj.nodeId='';
				}
				return $f.dom.node.add.add('propend',$obj.query,$obj.nodeText,$obj.nodeId);
			}

			},
			parent:{
				list: function(els){
					let parent=els.item(0).parentNode;
					for (var i = 1; i < els.length; i++) {
						if(parent!=els[i].parentNode){
							//console.log(`Different parentNode:`,'index '+i,'parentNode',parent,'list',els[i],'strange parentNode',els[i].parentNode);
							console.log(`Different parentNode:`,'index '+i);
							console.log('parentNode', parent);
							console.log('list',els);
							console.log('strange',els[i]);
							console.log('strange parentNode',els[i].parentNode);
							return false;
						}
					}
					return true;
				}
			},
			remove:{
				remove:function(els,wich){
					let len=els.length;
					if(len>1){
						let parent=els.item(0).parentNode;
						if (!$f.dom.node.parent.list(els)){
							return false;
						}
						let i=len-1;
						if(typeof wich != 'undefined' && wich=='first'){
							i=0;
						}
						
						parent.removeChild(els.item(i));
					}else if(len==1){
						els.item(0).setAttribute('hidden','');
					}
				},
				first: function(els){
					$f.dom.node.remove.remove(els,'first');
				},
				last: function(els){
					$f.dom.node.remove.remove(els,'last');
				}
			}
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
			return Number($n) == $n && $n % 1 == 0 && $n.trim()!='';
		},
		isFloat: function($n){
			return Number($n) == $n && $n % 1 !== 0 && $n.trim()!='';
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
	},
	validate: {
		isEmail: function(email){
			 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		 return re.test(email);
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


