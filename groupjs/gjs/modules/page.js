
var dynamicLoading = {  //引入外部js,css
 css: function(path){
 	if(!path || path.length === 0){
	  throw new Error('argument "path" is required !');
	 }
	var myHead = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    myHead.appendChild(link);
  },
  js: function(path){
	 if(!path || path.length === 0){
	  throw new Error('argument "path" is required !');
	 }
	 var myBody = document.getElementsByTagName('body')[0];
	    var script = document.createElement('script');
	    script.src = path;
	    script.type = 'text/javascript';
	    myBody.appendChild(script);
	  }
} 
dynamicLoading.js("groupjs/layui/layui.all.js");
dynamicLoading.css("groupjs/layui/css/layui.css");
dynamicLoading.css("groupjs/gcss/global.css");
 
  