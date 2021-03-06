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

      state.log.entries.forEach(function(entry) {
        t.equal(typeof entry.uuid, 'string');
        delete entry.uuid;
      });

      t.deepEqual(state, {
        currentTerm: 10,
        votedFor: 'some other node',
        log: {
          meta: {
            lastIncludedIndex: 20,
            lastIncludedTerm: 30
          },
          entries: [
            {
              index: 1,
              command: 'entry 1'
            },
            {
              index: 2,
              command: 'entry 2',
            },
            {
              index: 3,
              command: 'entry 3',
            }
          ],
        },
        peers: ['peer 1', 'peer 2']
      });

      t.end();
    }
  });
}