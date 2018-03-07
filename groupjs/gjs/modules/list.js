var list=(function(window){
	var list=function(name){
		return new list.fn.init(name);
	}
	 
	list.fn=list.prototype={
		constructor:list,
		init:function(name){
			this.name=name; 
		},
		tables:function(info){  //table  
			 layui.use('table', function(){
			  var table = layui.table; 
			  table.render({  //设置列信息
				    elem:info.ele
				    ,url:info.url
				    ,skin: 'line'
				    ,even: true 
				    ,page:true
				    ,cols: [info.col] 
				});  
				 
			  
			  
			 });  
			
		} 
	}
	list.fn.init.prototype=list.fn;
	return list;
})();
  