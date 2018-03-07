var timedata=(function(window){
	var timedata=function(name){
		return new timedata.fn.init(name);
	} 
	timedata.fn=timedata.prototype={
		constructor:timedata,
		init:function(name){
			this.name=name;  
		},
		timedata:function(info){  
			layui.use('laydate', function(){
			  var laydate = layui.laydate; 
			  laydate.render(info);
			});
		}		
	}
	timedata.fn.init.prototype=timedata.fn;
	return timedata;
})();

  