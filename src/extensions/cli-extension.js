const chmodSync = require('fs').chmodSync;
const resolve = require('path').resolve;

module.exports = toolbox => {
  toolbox.filesystem.resolve = resolve
  toolbox.filesystem.chmodSync = chmodSync
}