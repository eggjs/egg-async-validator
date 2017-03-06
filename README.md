# egg-async-validator

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-async-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-async-validator
[travis-image]: https://img.shields.io/travis/eggjs/egg-async-validator.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-async-validator
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-async-validator.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-async-validator?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-async-validator.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-async-validator
[snyk-image]: https://snyk.io/test/npm/egg-async-validator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-async-validator
[download-image]: https://img.shields.io/npm/dm/egg-async-validator.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-async-validator

Async validate plugin for egg.

See [async-validator](https://github.com/yiminghe/async-validator) for more information such as custom rule.

## Install

```bash
$ npm i egg-async-validator --save
```

## Enable plugin

```js
// config/plugin.js
exports.validate = {
  enable: true,
  package: 'egg-async-validator',
};
```

## Validate rules

All validate rules store on `app/xxxx`

### Validate Request Body

```js
// app/controller/home.js
exports.index = async () => {
  await this.validate({ id: 'id' }); // will throw if invalid
  // or
  const errors = await this.validator.validate({ id: 'id' }, this.request.body);
};
```

### Extend Rules

TBD

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
