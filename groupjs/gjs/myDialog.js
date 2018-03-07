$(function(){
	$("#alertInfo").on("click",function(){  //弹框01
		var myDialog = new dialog();  //初始化弹框，必填
		myDialog.alertInfo({  //弹框样式1
			  title: '标题标题标标题',   //弹框标题，选填
			  content: '内容内内容内容内容内',   //弹框内容，必填
			  width:"320px",   //弹框宽度，选填 
			  height:"160px"    //弹框高度，选填 
		});
	});
	
	
	
	$("#alertSure").on("click",function(){  //弹框02
		var myDialog = new dialog();  //初始化弹框，必填
		myDialog.alertSure({  //弹框样式2
			title:"标题",  //弹框标题，选填
			content:"内容内容内容内容内内容内容内容内容内内容内容",  //弹框内容，必填
			btn:['确定','取消'],  //按钮设置，只能设置两个按钮，必填
			yes:function(index, layero){  //点击确定
			  myDialog.msg({
					content:"我点击了确认",
					time:1000
				});
			},
			cancelBtn:function(index, layero){  //点击取消
			   console.log("我点击了取消")
			}
		});
	});
	
	$("#alertNoTitle").on("click",function(){  //弹框03
		var myDialog = new dialog();  //初始化弹框，必填
		myDialog.alertNoTitle({   //弹框样式2
			content:"内容",  //弹框内容，必填
			btn:['确定','取消'],  //按钮设置，只能设置两个按钮，必填
			yes:function(index, layero){  //点击确定
			  myDialog.msg({
					content:"我点击了确认",
					time:1000
				});
			},
			cancelBtn:function(index, layero){ //点击取消
			   console.log("我点击了取消")
			}
		});
	});
	
	$("#msg").on("click",function(){   //提示框
		var myDialog = new dialog();  //初始化弹框，必填
		myDialog.msg({  //提示框
			content:"msg提示提示了",  //弹框内容，必填
			time:1000  //弹框持续时间，选填
		});
	});
	
	$("#tips").on("click",function(){  //tips
		var myDialog = new dialog();  //初始化弹框，必填
		var thats=this;  //谁点击，获取this,必填
		myDialog.tips({  //tips弹框
			content:"信息信息 ",  //弹框内容，必填
			that:thats,  //谁点击
			time:1000  //弹框持续时间，选填
		}); 
	});
		 
		


		

});
