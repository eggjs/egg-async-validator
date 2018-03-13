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

Async validate plugin for egg, sharing validator scheme between frontend and backend with [Ant Design style](https://ant.design/components/form-cn/)

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

## Usage

> validate(scheme, options)(values)

### Define scheme, validate rules
> See [async-validator](https://github.com/yiminghe/async-validator) for more information such as custom rule

validate based on scheme, which define the shape of form fields, as simple as following

```js
const productScheme = {
  id: [{
    type: 'string',
    required: true,
  }]
};
```

### Validate in .jsx file with [antd.Form](https://ant.design/components/form-cn)

```jsx
<Form.Item>
{getFieldDecorator('id', {
  rules: productScheme.id,    // share the scheme here
})(<Input />)}
</Form.Item>
```

### Validate Request Body in chair.Controller

```js
// app/controller/home.js
exports.index = async () => {
  const error = await this.validate(productScheme, options)(this.request.body);
  if (error) {
    // throw manually
  }
};
```

### Tips

The package is so simple that it's easy to use as a npm module

```ts
import { validate } from 'egg-async-validator';

const errors = await validate(productScheme, options)(values);
if (errors) {
  // erros maybe [{ fields: 'id', message: 'why it fail' }] or null
  // throw
}
```

## Options

The Validator provides some options for porable use in some cases

- ignoreRequire: `default false` if true, skip all required rules check for values, it's very useful for validating partial params in a patch update request

## Typings

```ts
// chair.d.ts
import { ValidateType } from 'egg-async-validator';
declare module 'chair' {
  export interface Context {
    validate: ValidateType,
  }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
