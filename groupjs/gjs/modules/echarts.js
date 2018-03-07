var charts=(function(window){
	var charts=function(name){
		return new charts.fn.init(name);
	} 
	charts.fn=charts.prototype={
		constructor:charts,
		init:function(name){
			this.name=name; 
		},
		echartstable:function(info){  //echartstable 
			var myChart = echarts.init(document.getElementById(info.ele));
	        var option = {
	            xAxis: {data:info.xdata},
 				yAxis: {},
	            series: [{
	                type:info.type,
	                data:info.sdata
	            }] 
	        };
        	myChart.setOption(option);
		},
		echartMore:function(info){  //echartMore
			var myChart = echarts.init(document.getElementById(info.ele));
	        var option = {
	            xAxis: {data:info.xdata},
 				yAxis: {},
 				type:info.type,
	            series: info.series
	        };
        	myChart.setOption(option);
		},
		echartsort:function(info){   //echartsort
			 var myChart = echarts.init(document.getElementById(info.ele));
	        var option = {
//			    legend:info.legend,
			    series : [
			        {
			            type: 'pie',
			            radius: '55%',
			            data:info.data,
			            roseType: 'angle' 
			        }
			    ]
	        };
        	myChart.setOption(option);
		} 
		
	}
	charts.fn.init.prototype=charts.fn;
	return charts;
})();