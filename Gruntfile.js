module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig(loadPluginConfig('tasks/options/'));
    grunt.loadTasks('tasks');

    function loadPluginConfig(folderPath) {
        var glob = require('glob');
        var path = require('path');
        var config = {};

        var pluginConfigFiles = glob.sync('*', {
            cwd: folderPath
        });

        pluginConfigFiles.forEach(function(fileName) {
            var pluginName = fileName.replace(/\.js$/, '');
            var pluginConfigFilePath = './' + path.join(folderPath, fileName);

            config[pluginName] = require(pluginConfigFilePath);
        });

        return config;
    }
};