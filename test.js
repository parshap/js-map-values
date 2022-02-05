"use strict";

const test = require("baretest")(require('./package.json').name);
const assert = require("assert");
const map = require("./");

test("should map object", function(t) {
	var obj = map({ foo: 2, bar: 5 }, function(val) {
		return val * 2;
	});
	assert(Object.keys(obj).length === 2);
	assert(obj.foo === 4);
	assert(obj.bar === 10);
});

test.run()
