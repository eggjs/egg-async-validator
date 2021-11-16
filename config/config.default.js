'use strict';

/**
 * egg-async-validator default config
 * @member Config#asyncValidator
 * @property {String} SOME_KEY - some description
 */
exports.asyncValidator = {
  cn: {
    default: '%s校验失败',
    required: '%s是必填项',
    enum: '%s必须是%s中的一个',
    whitespace: '%s非空',
    types: {
      string: '%s不是有效%s',
      array: '%s不是有效%s',
      object: '%s不是有效%s',
      number: '%s不是有效%s',
      date: '%s不是有效%s',
      boolean: '%s不是有效%s',
      integer: '%s不是有效%s',
      float: '%s不是有效%s',
      regexp: '%ss不是有效%s',
      email: '%s不是有效%s',
      url: '%s不是有效%s',
      hex: '%s不是有效%s',
    },
    string: {
      len: '%s必须是%s个字符',
      min: '%s最少%s个字符',
      max: '%s最多%s个字符',
      range: '%s长度必须在%s~%s之间',
    },
    number: {
      len: '%s必须等于%s',
      min: '%s不能小于%s',
      max: '%s不能大于%s',
      range: '%s必须是[%s,%s]间的值',
    },
    array: {
      len: '%s长度必须等于%s',
      min: '%s长度不能小于%s',
      max: '%s长度不能大于%s',
      range: '%s长度必须在%s~%s之间',
    },
    pattern: {
      mismatch: '%s值%s格式%s匹配失败',
    },
  },
  options: {
    first: true,
  },
  raw: true,
};
