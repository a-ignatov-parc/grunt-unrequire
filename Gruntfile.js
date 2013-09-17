var fs = require('fs'),
	pkg = require('./package.json'),
	gruntConfig = {
		pkg: pkg,
		unrequire: {
			src: pkg.srcPath + 'example.js',
			dest: pkg.buildPath + 'build.js',
			options: {
				exportModule: 'name',
				exportModuleName: 'NameConstructor'
			}
		}
	};

module.exports = function(grunt) {
	// Инициализируем конфиг
	grunt.initConfig(gruntConfig);

	// Загружаем кастомные таски
	grunt.loadTasks('tasks');

	// Регистрируем таски
	grunt.registerTask('default', 'unrequire');
};
