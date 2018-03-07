 var dialog=(function(window){
	var dialog=function(name){
		return new dialog.fn.init(name);
	}
	
	function isNull(nullInfo){  //是否为空判断
		if(nullInfo==null || nullInfo==undefined || nullInfo==""){
			return true;
		}else{
			return false;
		}
	}
	 
	dialog.fn=dialog.prototype={
		constructor:dialog,
		init:function(name){
			this.name=name; 
		},
		alertInfo:function(info){  //alert01 
			var mwidth="260px",wheight="160px",title="提示";
			if(!isNull(info.width)){
				mwidth=info.width;
			}
			if(!isNull(info.height)){
				wheight=info.height;
			}
			if(!isNull(info.title)){
				title=info.title;
			}
			layer.open({
				type:1, 
//				skin:"layui-layer-rim", 
				area:[mwidth,wheight],
				title:title,
				content:info.content,
				
			}); 
		},
		alertSure:function(info){  //alert02
			var mwidth="320px",wheight="200px",title="提示";
			if(!isNull(info.width)){
				mwidth=info.width;
			}
			if(!isNull(info.height)){
				wheight=info.height;
			}
			if(!isNull(info.title)){
				title=info.title;
			}
			layer.open({
				area:[mwidth,wheight],
				title:title,
				content:info.content,
				btn: info.btn,
				yes: info.yes,
				btn2:info.cancelBtn 
			});
		},
		alertNoTitle:function(info){   //alert03
			layer.open({ 
//				area:["320px","200px"],
				title:false,
				closeBtn: false,
				content:info.content,
				btn: info.btn,
				btnAlign: 'c',
				yes: info.yes,
				btn2:info.cancelBtn 
			});
		},
		msg:function(info){  //msg
			var times;
			if(isNull(info.time)){
				times=4000;
			}else{
				times=info.time;
			}
			layer.msg(info.content,{
				time:times
			});
		},
		tips:function(info){  //tips
			var times;
			if(isNull(info.time)){
				times=4000;
			}else{
				times=info.time;
			}
			layer.tips(info.content,info.that,{
//				tips:1,
				time:times
			});
		}
		
	}
	dialog.fn.init.prototype=dialog.fn;
	return dialog;
})();
  