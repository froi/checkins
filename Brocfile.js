/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css.map');
app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');

app.import('bower_components/bootstrap/dist/css/bootstrap.css.map');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');

app.import('bower_components/bootstrap-material-design/dist/css/material-wfont.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/material-wfont.min.css.map');

app.import('bower_components/bootstrap-material-design/dist/css/material.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/material.min.css.map');

app.import('bower_components/bootstrap-material-design/dist/css/ripples.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/ripples.min.css.map');

app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

app.import('bower_components/bootstrap-material-design/dist/js/material.min.js');
app.import('bower_components/bootstrap-material-design/dist/js/material.min.js.map');

app.import('bower_components/bootstrap-material-design/dist/js/ripples.min.js');
app.import('bower_components/bootstrap-material-design/dist/js/ripples.min.js.map');

module.exports = app.toTree();
