
var $f={
	a: {
		external: {
			target: function($target){
				if(typeof $target=='undefined'){
					$target='_blank';
				}
				var main_url=document.location.href;
				var main_host=$f.url.host(main_url);
				$('a[href]').each(function(){
					var el=$(this);
					var url = el.attr('href');
					var target= el.attr('target');
					var host= $f.url.host(url);
					if($f.url.isAbsolute(url) && main_host!=host && (typeof target=='undefined' || $f.a.targets.indexOf(target)<0)){
						// console.log('Es absoluta y tiene un dominio diferente');
						el.attr('target',$target);
					}
				});
			},
			targets: ['_blank','_self','_parent','_top','framename']
		}
	},
	url:{
		isAbsolute: function(url){
			var r = new RegExp('^(?:[a-z]+:)?//', 'i');
			return r.test(url);
		},
		host: function (url) {
  			return url.toString().replace(/^(.*\/\/[^\/?#]*).*$/,"$1");
		}

	},
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
	}
};


$f.a.external.target();

