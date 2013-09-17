grunt-unrequire
===============

Grunt task for converting r.js build files to javascript files without require

---

# Overview

Inside your `Gruntfile.js` file add a section named `unrequire`. This section specifies the options passed to build optimizer.

### Parameters

`src` **string**

This specify path to build file that should be optimized and unrequired.

`dest` **string**

This specify path where result file should be placed.

### Options

`exportTarget` **string**

This specify target object where exported module should be added.

`exportModule` **string**

This specify module name that should be exported after file execution.

`exportModuleName` **string**

Here you can set new name to exported module result.

# Config Example

```
unrequire: {
	src: 'src/input.js',
	dest: 'dest/output.js',
	options: {
		exportTarget: 'window',
		exportModule: 'moduleNameToExport',
		exportModuleName: 'exportedModuleName'
	}
}
```