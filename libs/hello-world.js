
module.exports = (function (HelloWorld) {
	
	HelloWorld = function () {};

	HelloWorld.prototype.sayHello = function (name) {
		return 'Hello ' + name;
	};

	return HelloWorld;

})();