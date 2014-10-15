# Abstract Skiff Persistence

Abstract prototype for building a [Skiff](https://github.com/pgte/skiff) persistence provider.

## Install

```bash
$ npm install abstract-skiff-persistence

## Implement

```javascript
var AbstractSkiffPersistence = require('abstract-skiff-persistence');
var inherits = require('util').inherits;

module.exports = FakeSkiffPersistence;

function FakeSkiffPersistence() {
}

inherits(FakeSkiffPersistence, AbstractSkiffPersistence);

FakeSkiffPersistence.prototype._
'use strict';

module.exports = AbstractSkiffPersistence;

function AbstractSkiffPersistence(options) {
}

FakeSkiffPersistence.prototype._saveMeta = function(nodeId, state, callback) {
  // ...
};

FakeSkiffPersistence.prototype._loadMeta = function(nodeId, callback) {
  // ...
};

FakeSkiffPersistence.prototype._applyCommand = function(nodeId, commitIndex, command, callback) {
  // ...
};

FakeSkiffPersistence.prototype._lastAppliedCommitIndex = function(nodeId, callback) {
  // ...
};

FakeSkiffPersistence.prototype._saveCommitIndex = function(nodeId, commitIndex, callback) {
  // ...
};

FakeSkiffPersistence.prototype._createReadStream = function(nodeId) {
  // ...
};

FakeSkiffPersistence.prototype._createWriteStream = function(nodeId) {
  // ...
};
```

## Test

You can use this module to test your Skiff Persistence provider:

```javascript
'use strict';

var test = require('abstract-skiff-persistence/test/all');

var FakeSkiffPersistence = require('../');
var p = new FakeSkiffPersistence();

test(p);
```

# License

ISC