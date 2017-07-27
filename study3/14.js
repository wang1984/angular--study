// JavaScript Document

var app=angular.module('test', []);


app.controller('main', function ($scope){
	$scope.show=false
	/*这个控制器只是定义了并没有使用*/
});
app.directive('znsshowmore', function (){
	return {
		restrict: 'E',
		template:           /*转译*/
		'<div class="{{show?\'more2\':\'more\'}}">\
			<a href="javascript:;" ng-click="show=!show">显示更多</a>\
			<span ng-transclude></span>\
		</div>',
		/*js字符串不支持跨行显示 －－ 可以在换行结尾处 加上 \      */
		transclude: true
	};
});