'use strict';

module.exports = {
  async validate(rules, data = this.request.body) {
    return this.app.validate(rules, data)
  },
};
