require.config({
	paths:{
		'zepto':'lib/zepto',
		'zepto.touch':'lib/zepto.touch',
		'underscore':'lib/underscore',
		'backbone':'lib/backbone',
		'TouchSlide':'lib/TouchSlide.1.1'
	},
	shim:{
		'zepto':{
			exports:'$'
		},
		'zepto.touch':{
			deps:['zepto'],
			exports:'$'
		},
		'TouchSlide':{
			exports:'TouchSlide'
		}
	},
	map:{
		'*':{
			'css':'lib/css'
		}
	}
})

require(['zepto','underscore','zepto.touch','backbone','router/router','TouchSlide','css!reset'], function($,_,$touch,Backbone,Router,TouchSlide) {
	//轮播图
	
})