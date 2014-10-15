'use strict';

var test = require('tape');

module.exports = saveMetaTests;

function saveMetaTests(p) {
  test('saves meta', function(t) {
    p.saveMeta('node id', {
      currentTerm: 10,
      votedFor: 'some other node',
      log: {
        meta: {
          lastIncludedIndex: 20,
          lastIncludedTerm: 30
        },
        entries: ['entry 1', 'entry 2']
      },
      peers: ['peer 1', 'peer 2']
    }, saved);

    function saved(err) {
      t.ok(! err);
      if (err) {
        throw err;
      }
      t.end();
    }
  });
}