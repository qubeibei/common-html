var upload=(function(window){
	var upload=function(name){
		return new upload.fn.init(name);
	} 
	upload.fn=upload.prototype={
		constructor:upload,
		init:function(name){
			this.name=name;  
		},
		uploads:function(info){  
			layui.use('upload', function(){
			  var upload = layui.upload; 
			  var uploadInst = upload.render(info);
			}); 
		}		
	}
	upload.fn.init.prototype=upload.fn;
	return upload;
})();

  