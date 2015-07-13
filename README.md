# ES6 Project Starter

This project provides a starting point for developing a JavaScript application that uses ES6 and its module system. 
It provides a build process which transpiles ES6 code to ES5 with support for ES6 modules.

Run `grunt serve` and visit `http://localhost:9000` in the browser to develop. Livereload is enabled so as you make 
changes and save your files, the browser will automatically refresh.

[Browserify](http://browserify.org/) is used with [babelify](https://github.com/babel/babelify) to transpile the code and enable ES6 module 
support. 

Unfortunately, I haven't been able to get source maps to work correctly with `babelify` or `es6ify`.
* babelify will generate the source maps, but they are for the already transpiled files.
* es6ify will generate source maps, but the browser dev tools show empty files.
