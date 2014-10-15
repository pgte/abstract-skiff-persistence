'use strict';

var test = require('tape');
var ASP = require('./');

test('saveMeta extensibility', function(t) {
  var p = new ASP();
  var args = ['nodeId', {some: 'state'}, function() {}];
  p._saveMeta = function() {
    t.deepEqual(toArray(arguments), args);
    t.end();
  };
  p.saveMeta.apply(p, args);
});

function toArray(args) {
  return Array.prototype.slice.call(args);
}