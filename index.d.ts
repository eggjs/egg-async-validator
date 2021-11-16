import type, { Rules, ValidateOption, ValidateError } from 'async-validator'

declare module 'egg' {
  export interface Application {
    validate: (rules: Rules, data?: Object, options?: ValidateOption) => Promise<ValidateError | Array<ValidateError> | String>;
  }

  export interface Context {
    validate: (rules: Rules, data?: Object) => Promise<ValidateError | Array<ValidateError> | String>;
  }
}
