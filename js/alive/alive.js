//直播页视图
define(['backbone','collection/collection','TouchSlide','zepto','css!alive/alive.css'],function(Backbone,Acollection,TouchSlide,$) {
	var AliveView = Backbone.View.extend({
		//渲染视图
		tpl:_.template('<li><img src="<%=image%>" alt=""><p><%=title%></p></li>'),
		tpl2:_.template(this.$('#tpl2').html()),
		tpl3:_.template('<li class="left"><div class="img"><img src="<%=url%>" alt=""><span class="sign">直播中</span></div><p class="name"><%=title%></p><p class="court"><%=court_name%></p></li>'),
		tpl4:_.template('<li class="left"><div class="img"><img src="<%=url%>" alt=""><span class="sign sign2">回顾</span></div><p class="name"><%=title%></p></li>'),
		initialize:function() {
			//监听集合的add事件，并渲染视图
			this.listenTo(this.collection,'add',function(model,collection,option) {
				this.render1(model.get('focus'));
				this.render2(model.get('special'));
			})
			this.getData();
		},
		//集合请求数据
		getData:function() {
			this.collection.fetchData();
		},
		render1:function(arr) {
			var me = this;
			arr.forEach(function(item,index) {
				var data = {
					image:item.image,
					title:item.title
				};
				var html = me.tpl(data);
				me.$('.c-view .bd').append(html);
			})
			TouchSlide({slideCell:'#carousel',autoPlay:true,effect:'leftLoop'})
			//获取元素
			//获取数据
			/*var data = {
				image:model.get('image'),
				title:model.get('title')
			}*/
			/*var html = this.tpl(data);
			this.$('.c-view .bd').append(html);*/
		},
		render2:function(special_arr) {
			//获取元素 this.$('.alive_view')
			//获取数据
			var me = this;
			special_arr.forEach(function(item,index) {
				var list_html='';
				if(item.title === '正在直播'){
					var arr = item.data;
					arr.forEach(function(model,index) {
						var data = {
							url:model.cover_img,
							court_name:model.court_name,
							title:model.title
						}
						list_html += me.tpl3(data);
					})
				}else if(item.title === '经典案件'){
					var arr = item.data;
					arr.forEach(function(model,index) {
						var data = {
							url:model.cover_img,
							title:model.title
						}
						list_html += me.tpl4(data);
					})
				}
				var data = {
					type:item.title,
					subtitle:item.subtitle,
					list_cont:list_html,
					href:'#list'
				}
				var html= me.tpl2(data);
				me.$('.alive_view').append(html);
			})	
			
			
			
		}
	});
	
	return AliveView
})