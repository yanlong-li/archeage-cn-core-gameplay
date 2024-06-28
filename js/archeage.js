(function ($) {
	"use strict";

	if (typeof window.ArcheAge === "undefined") {
		window.ArcheAge = {};
	}


	ArcheAge.namespace = function (ns) {
		var parts = ns.split("."),
				parent = ArcheAge,
				i;

		if (parts[0] === "ArcheAge") {
			parts = parts.slice(1);
		}

		for (i = 0; i < parts.length; i += 1) {
			if (typeof parent[parts[i]] === "undefined") {
				parent[parts[i]] = {};
			}

			parent = parent[parts[i]];
		}
		return parent;
	};
}(jQuery));

/*
 * Simple JavaScript Inheritance By John Resig http://ejohn.org/
 * http://ejohn.org/blog/simple-javascript-inheritance/ MIT Licensed.
 */
// Inspired by base2 and Prototype
(function () {
	"use strict";

	var initializing = false, fnTest = /xyz/.test(function () {
		xyz;
	}) ? /\b_super\b/ : /.*/;

	// The base Class implementation (does nothing)
	window.Class = function () {
	};

	// Create a new Class that inherits from this class
	Class.extend = function (prop) {
		var _super = this.prototype;
		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		var name;

		// Copy the properties over onto the new prototype
		for (name in prop) {
			// Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] === "function" && typeof _super[name] === "function" && fnTest.test(prop[name]) ? (function (name, fn) {
					return function () {
						var tmp = this._super;

						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = _super[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						var ret = fn.apply(this, arguments);
						this._super = tmp;

						return ret;
					};
				}(name, prop[name])) : prop[name];
		}

		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if (!initializing && this.init)
				this.init.apply(this, arguments);
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable

//		Class.extend = arguments.callee; // use strict 때문에 이 줄 삭제됨.
		Class.extend = window.Class.extend;

		return Class;
	};
}());/*  |xGv00|4139694653451ada07db154d661ef8b4 */