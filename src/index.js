"use strict";

const handler = {
  get: (obj, prop) => {
    if (typeof(prop) != 'string') {
      return;
    }
    return(...args) =>
      ((prop + '(' + args.map(v => JSON.stringify(v)).join(',') + ')'));
  }
}

const evalbuilder = new Proxy({}, handler);

module.exports = evalbuilder;
