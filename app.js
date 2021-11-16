'use strict';

const asyncValidator = require('async-validator');

module.exports = app => {
  const { cn, raw, options: validateOptions } = app.config.asyncValidator;
  app.validate = (rules, source, options = validateOptions) => {
    const validator = new asyncValidator.default(rules);
    validator.messages(cn);
    return validator.validate(source, options)
      .then(() => {
        // 校验成功，没有任何返回
      })
      .catch(({ errors }) => {
        if (raw) {
          return errors.map(error => error.message).join(';');
        }
        return errors;
      });
  };
};
