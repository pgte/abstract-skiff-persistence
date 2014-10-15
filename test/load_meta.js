'use strict';

var test = require('tape');

module.exports = loadMetaTests;

function loadMetaTests(p) {
  test('loads meta', function(t) {
    p.loadMeta('node id', loaded);

    function loaded(err, state) {
      if (err) {
        throw err;
      }

      t.deepEqual(state, {
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
      });

      t.end();
    }
  });
}