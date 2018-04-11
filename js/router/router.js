define(['zepto','underscore','backbone','alive/alive','alive_list/alive_list','collection/collection'], function($,_,Backbone,Alive,Alive_list,Collection) {
	//实例化集合
	var focusC = new Collection[0]();
	var listC = new Collection[1]();
	//实例化视图
	var focus = new Alive({
		el:$('#app'),
		collection:focusC
	});
	var list = new Alive_list({
		el:$('.alive_list_page'),
		collection:listC
	})
	var Router = Backbone.Router.extend({
		routes:{
			'list':'showList',
			'*other':'showAlive'
		},
		showAlive:function() {
			//渲染三个视图
			//focus.render();

			$('.alive_page').show();
			$('.alive_list_page').hide();
		},
		showList:function() {
			//渲染一个视图

			$('.alive_page').hide();
			$('.alive_list_page').show();
		}
	});
	var router = new Router();
	Backbone.history.start();
})