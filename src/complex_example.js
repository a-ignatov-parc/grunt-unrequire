define('name', ['dep1', 'dep2'], function(obj1, obj2) {
	obj2.create();

	require(['plugin!dep4'], function(obj4) {
		alert(obj4.hello);
	});

	return {
		prop1: obj1,
		prop2: obj2
	}
});

define('dep1', function() {
	var api = {
			name: '',
			require: null,
			define: null,
			status: -1
		};

	return {
		api: api
	}
});

define('dep2', ['dep3'], function(loader) {
	return {
		create: function(arguments) {
			loader(window.define);
		}
	}
});

define('dep3', function() {
	return function(define) {
		define('plugin', function() {
			return {
				load: function(name, req, onload) {
					req([name], function(module) {
						onload(module);
					});
				}
			};
		});
	};
});

define('dep4', function() {
	return {
		hello: 'world'
	}
});
