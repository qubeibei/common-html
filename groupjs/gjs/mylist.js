$(function(){
		var mylist=new list(); //列表初始化
		mylist.tables({  //使用列表
			ele:"#test",  //对应列表id名称
			url:"data/list.json",  //列表数据
			col:[  //列表对应字段值
			      {type:"checkbox"}  //列表复选框
			      ,{field:'id',title: 'ID', sort: true}  //列表名称，field-字段名，title-标题，sort-排序
			      ,{field:'username',title: '用户名'}
			      ,{field:'sex',title: '性别'} 
			      ,{fixed: 'right',title: '操作', width:300, align:'center', toolbar: '#barDemo'} //width-宽，height-高，toolbar-自定义操作列，#barDemo对应操作列的id
			    ]
		});
		
		
		
		//操作区
		layui.use('table', function(){
			var table = layui.table;
			//监听表格复选框选择
			table.on('checkbox(demo)', function(obj){
			  console.log(obj)
			});
			//监听操作
			table.on('tool(demo)', function(obj){  //注：tool是工具条事件名，demo是table原始容器的属性 lay-filter="对应的值"
			    var data = obj.data;
			    console.log(obj)
			    if(obj.event === 'detail'){  //查询操作，detail操作按钮对应lay-event="相对应的值"
			      layer.msg('ID：'+ data.id + ' 的查看操作');
			    } else if(obj.event === 'del'){ //删除操作
					alert("删除");
			        obj.del();  
			    } else if(obj.event === 'edit'){  //编辑操作
			      layer.alert('编辑行：<br>'+ JSON.stringify(data))
					alert("编辑")
			    }else if(obj.event === 'info'){  //自定义添加的操作
			       console.log(obj.data);
					alert("自定义添加")
			    }
			});
		});

});
