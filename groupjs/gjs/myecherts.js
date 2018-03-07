$(function(){
		var myecharts=new charts(); //图表初始化
		
		myecharts.echartstable({  //使用图表
			ele:"main",  //对应图形容器id名称，只能使用ID并不能带#
			type:"bar",  //类型，line-线型，bar-柱型
			xdata:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],  //X轴数据
			sdata:[5,10,30,20,10,30]
		});
		
		myecharts.echartstable({  //使用线性图表
			ele:"line",  //对应图形容器id名称，只能使用ID并不能带#
			type:"line",  //类型，line-线型，bar-柱型
			xdata:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],  //X轴数据
			sdata:[5,10,30,20,10,30]
		});
		
		myecharts.echartMore({  //使用线性图表
			ele:"lineMore",  //对应图形容器id名称，只能使用ID并不能带#
			type:"line",  //类型，line-线型，bar-柱型
			xdata:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],  //X轴数据
			series:[
				{ name:'2016 销量',type:'line',data:[5,10,30,20,10,30]},
				{name:'2017 销量',type:'line',data:[1,16,20,10,10,70]}
			]
		});
		
		myecharts.echartMore({  //使用线性图表
			ele:"barMore",  //对应图形容器id名称，只能使用ID并不能带#
			type:"bar",  //类型，line-线型，bar-柱型
			xdata:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],  //X轴数据
			series:[
				{ name:'2016 销量',type:'bar',data:[5,10,30,20,10,30]},
				{name:'2017 销量',type:'bar',data:[1,16,20,10,10,70]}
			]
		});
		
		
		myecharts.echartsort({  //饼图
			ele:"sort",//id名称
			legend:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','搜索擎','搜擎'],  //标题
			data:[{value:335, name:'直接访问'}, //数据
	                {value:310, name:'邮件营销'},
	                {value:274, name:'联盟广告'},
	                {value:235, name:'视频广告'},
	                {value:400, name:'搜索引擎'},
	                {value:200, name:'搜索擎'},
	                {value:200, name:'搜擎'}]
		})

});
