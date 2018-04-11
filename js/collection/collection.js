//集合模块
define(['backbone','zepto'],function(Backbone,$) {
	var FocusCol = Backbone.Collection.extend({
		url:'/data/data.json',
		fetchData:function() {
			var me = this;
			$.get(this.url,function(data){
				me.add(data);
			})
		}
	});
	var ListCol = Backbone.Collection.extend({
		url:'/data/data.json',
		fetchData2:function() {
			var me = this;
			$.get(this.url,function(data){
				me.add(data.special[0].data);
				me.add(data.special[1].data);
			})
		}
	})
	
	return [FocusCol,ListCol]
})