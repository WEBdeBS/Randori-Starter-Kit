
var assert = require('assert'),
	HelloWorld = require('../libs/hello-world');

describe('HelloWorld', function () {

	beforeEach(function() {
		this.helloWorld = new HelloWorld();
	});

	it('should say "Hello World"', function () {
		var result = this.helloWorld.sayHello('World');
		assert.equal(result, 'Hello World');
	});

});