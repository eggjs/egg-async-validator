'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');

describe('test/validate.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'validate_form',
    });
    return app.ready();
  });

  after(() => app.close());

  describe('post', () => {

    it('should return invalid_param when length invaild', () => {
      return request(app.callback())
        .post('/users.json')
        .send({
          username: 'foo',
          password: '0',
        })
        .expect(res => {
          const problemFields = res.body.map(a => a.field);
          assert(problemFields.includes('username'));
          assert(problemFields.includes('password'));
        });
    });

    it('should all pass', () => {
      return request(app.callback())
        .post('/users.json')
        .send({
          username: 'foo@gmail.com',
          password: '00',
        })
        .expect(201);
    });
  });
});
