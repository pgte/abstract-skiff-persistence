'use strict';

var saveMetaTests = require('./save_meta');
var loadMetaTests = require('./load_meta');

module.exports = testAll;

function testAll(p) {
  saveMetaTests(p);
  loadMetaTests(p);
}