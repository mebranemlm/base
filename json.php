<?php 

$arr=array();
$arr['msj1']='Mensaje 1';
$arr['msj2']='Mensaje 2';

$json=json_encode($arr);

 ?>

 <button onclick='alerta(<?=$json?>)'>Click</button>
 <button onclick='alerta2()'>Click</button>

 <script type="text/javascript">
 	
 	function alerta($json){
 		// console.log($json);
 		//$json=JSON.parse($json);
 		console.log($json.msj1);
 	}

 	function alerta2(){
 		$json='{"msj1":"mensaje1"}';
 		alerta({msj1:'mensaje1'});
 	}

 </script>