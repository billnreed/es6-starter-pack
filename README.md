# ES6 Project Starter

This project provides a starting point for developing a JavaScript application that uses ES6 and its module system. 
It provides a build process which transpiles ES6 code to ES5 with support for ES6 modules.

Run `grunt serve` and visit `http://localhost:9000` in the browser to develop. Livereload is enabled so as you make 
changes and save your files, the browser will automatically refresh.

[Browserify](http://browserify.org/) is used with [es6ify](https://github.com/thlorenz/es6ify) to transpile the code 
and enable ES6 module support. Note that source maps weren't working with es6ify 1.6.0, but do work with 1.4.0. 

This technique compiles all your JavaScript files into one and it all gets loaded onto the page at once. If 
everything is minified and the file size is small enough, then this should be okay. However, if it takes too long for
the page to load then a different techniques that loads files asynchronously would be better. Take a look at 
[SystemJS](https://github.com/systemjs/systemjs) and [jspm](http://jspm.io/).
