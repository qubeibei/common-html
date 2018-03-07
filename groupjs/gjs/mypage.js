$(function(){
		//拼接
        function mypage(pIndex,pageNum) {  //pIndex--当前页，pageNum--每页显示多少条；
        	var count=1;
        	$.ajaxSettings.async=false;
            $.getJSON("data/page.json?pageindex=" + pIndex + "&pagesize=" + pageNum, function (data) {
                var myD = data.res; 
                if(data.code==1){
                	count=data.count;
                	var mydata = "";
	                for (var i = 0; i < myD.length; i++) {
	                    mydata += "<tr><td>" + myD[i].id + "</td><td>" + myD[i].username + "</td></tr>"
	                }
	                $("#table").html(mydata);
                } 
            }); 
            $.ajaxSettings.async=true;
            return count; //返回总条数
        } 
        
        
        //分页
        layui.use('laypage', function () {
            var laypage = layui.laypage;  
            laypage.render({
                elem: "page",//对应id
                count:mypage(1,10),//数据总数，从服务端得到
                limit:10, //第页显示多少条
                jump: function (obj, first) {  //点击分页刷新数据
                  if(!first){//是否首次进入页面    
                    mypage(obj.curr,obj.limit) //obj.curr--得到当前页，以便向服务端请求对应页的数据；obj.limit--得到每页显示的条数
                  }  
                }
            });
        }); 
        
		

});
