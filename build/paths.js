var path = require('path');

var appRoot = 'www/';
var outputRoot = 'cordova/www/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    styles: {
        scss: appRoot + 'styles/scss/**/*.scss',
        css: appRoot + '**/*.css'
    },
    output: outputRoot,
    sourceMapRelativePath: '../' + appRoot,
    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/',

    //own folders until bundling happens
    jspm: './jspm_packages/**/*.*',
    config: './config.js',
    img: appRoot + 'img/**/*.*'

};
