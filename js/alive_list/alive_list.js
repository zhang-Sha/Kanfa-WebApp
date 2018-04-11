//列表视图
define(['backbone','collection/collection','zepto','css!alive_list/alive_list.css'],function(Backbone,Acollection,$) {
	var AliveListView = Backbone.View.extend({
		tpl:_.template('<li class="left"><div class="img"><img src="<%=url%>" alt=""><span class="sign" style="<%=style%>"><%=type%></span></div><p class="name"><%=title%></p><p class="court"><%=court_name%></p></li>'),
		events:{
			'tap .nav':'renderNow',
			'tap .back':'goBack'
		},
		initialize:function() {
			this.listenTo(this.collection,'add',function(model,collection,option) {
				this.render(model);
			})
			this.getData();
		},
		render:function(model) {
			//获取元素this.$('.list_cont')
			var modelJson = model.toJSON();
			if(modelJson.type == 9){
				var type = '直播中';
				var style = 'background:rgba(255,0,0,.8)';
			}else if(modelJson.type == 4 ){
				var type = '回顾';
				var style = 'background:rgba(0,0,0,.8)';
			};
			var data = {
				url:modelJson.cover_img,
				type:type,
				title:modelJson.title,
				court_name:modelJson.court_name,
				style:style
			};
			var html = this.tpl(data);
			this.$('.list_cont').append(html)

		},
		getData:function() {
			this.collection.fetchData2();
		},
		clearView:function() {
			this.$('.list_cont').html('')
		},
		renderNow:function(e) {
			this.clearView();
			this.$(e.target).addClass('on').siblings().removeClass('on');
			var me = this;
			if(e.target.id == 'all'){
				this.collection.forEach(function(model) {
					me.render(model);
				})
			}else if(e.target.id == 'now'){
				var result = this.collection.filter(function(model) {
					return model.get('type') == 9
				});
				result.forEach(function(item,index) {
					me.render(item);
				})
			}else if(e.target.id == 'review'){
				var result = this.collection.filter(function(model) {
					return model.get('type') == 4
				});
				result.forEach(function(item,index) {
					me.render(item);
				})
			}
		},
		goBack:function() {
			history.go(-1);
			$('body').scrollTop(0);
		}
	})
	return AliveListView
})