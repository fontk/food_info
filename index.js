require("babel-core/register")({ presets: [ 'env' ] });
// require('babel-register')({presets: [ 'env' ]})
require("babel-polyfill");

const path = require('path');
require("dotenv").config();

exports = module.exports = require("./src");