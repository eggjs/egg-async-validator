'use strict';

const createRule = {
  username: [{
    type: 'email',
    required: true,
  }],
  password: [{
    type: 'string',
    min: 2,
    max: 4,
  }],
  addition: [{
    type: 'string'
  }],
};

exports.create = function* () {
  const error = yield this.validate(createRule)(this.request.body);
  this.body = error;
  if (error) {
    this.body = error;
    this.status = 400;
  } else {
    this.status = 201;
  }
};
