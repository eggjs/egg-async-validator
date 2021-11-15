# egg-validate

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-validate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-validate
[travis-image]: https://img.shields.io/travis/eggjs/egg-validate.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-validate
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-validate.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-validate?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-validate.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-validate
[snyk-image]: https://snyk.io/test/npm/egg-validate/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-validate
[download-image]: https://img.shields.io/npm/dm/egg-validate.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-validate

借助 [async-validator](https://github.com/yiminghe/async-validator)，支持参数的灵活校验和自定义message，弥补egg-validate插件的不足（自定义message的支持问题）

## 依赖说明

### 依赖的 egg 版本

egg-validate 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件

[async-validator](https://github.com/yiminghe/async-validator)

## 开启插件

```js
// config/plugin.js
exports.asyncValidator = {
  enable: true,
  package: 'egg-async-validator',
};
```

## 使用场景

```js
// app/controller/index.js
exports.index = async () => {
  const rules = {
    id: {
      type: 'number',
      required: true
    },
    name: {
      type: 'string',
      required: true,
      max: 126,
    }
  }
  const error = await ctx.validate(rules, ctx.request.body)
  if (error) {
    ctx.body = {
      success: false,
      message: `参数错误：${error}`
    }
    return false
  }
};
```

使用 async-validator 来校验参数的合法性，内置一套校验错误中文提示信息，如下：

```json
{
  "default": "%s校验失败",
  "required": "%s是必填项",
  "enum": "%s必须是%s中的一个",
  "whitespace": "%s非空",
  "types": {
    "string": "%s不是有效%s",
    "array": "%s不是有效%s",
    "object": "%s不是有效%s",
    "number": "%s不是有效%s",
    "date": "%s不是有效%s",
    "boolean": "%s不是有效%s",
    "integer": "%s不是有效%s",
    "float": "%s不是有效%s",
    "regexp": "%ss不是有效%s",
    "email": "%s不是有效%s",
    "url": "%s不是有效%s",
    "hex": "%s不是有效%s"
  },
  "string": {
    "len": "%s必须是%s个字符",
    "min": "%s最少%s个字符",
    "max": "%s最多%s个字符",
    "range": "%s长度必须在%s~%s之间"
  },
  "number": {
    "len": "%s必须等于%s",
    "min": "%s不能小于%s",
    "max": "%s不能大于%s",
    "range": "%s必须是[%s,%s]间的值"
  },
  "array": {
    "len": "%s长度必须等于%s",
    "min": "%s长度不能小于%s",
    "max": "%s长度不能大于%s",
    "range": "%s长度必须在%s~%s之间"
  },
  "pattern": {
    "mismatch": "%s值%s格式%s匹配失败"
  }
}
```

更多高级规则可参考 [async-validator](https://github.com/yiminghe/async-validator)

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

暂无

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
