 
 var loading=(function(){
 		var loading=function(){}
 		function isNull(nullInfo){  //是否为空判断
			if(nullInfo==null || nullInfo==undefined || nullInfo==""){
				return true;
			}else{
				return false;
			}
		}
 	  loading.fn=loading.prototype={
 	  	constructor:loading,
 	  	show:function(info){
 	  		var $dia="";
	  		if($(".loadPic").length>0 || $(".loadBg").length>0){
	  			$(".loadPic,.loadBg").detach();
	  		}
  			if(isNull(info)){
 	  			info={};
 	  		}
 	  		if(isNull(info.pic)){
 	  			$dia='<div class="loadPic margin"><img src="img/pic01.png"></div>';
 	  		}else{
 	  			$dia='<div class="loadPic margin"><img src="'+info.pic+'"></div>';
 	  		}
 	  		if(info.isShade==false){
 	  			$dia+='';
 	  		}else{
 	  			$dia+='<div class="loadBg"></div>';
 	  		} 
				$(document.body).append($dia);
 	  		 
				setTimeout(function(){
					$(".loadPic,.loadBg").detach();
				},2000);
 	  	},
 	  	hide:function(){
 	  		if($(".loadPic").length>0 || $(".loadBg").length>0){
 	  			$(".loadPic,.loadBg").detach();
 	  		}
 	  	}
 	  }
 	  return loading;
 })();
 