import Validator, { ErrorField, Scheme } from 'async-validator';

export interface Options {
  ignoreRequire: boolean;
}

export { ErrorField, Scheme };

export type ValidateType = (scheme: Scheme, options?: Options) =>
  (values: { [key: string]: any }) => Promise<ErrorField[] | null>;

export const validate = (scheme: Scheme, options: Options = { ignoreRequire: false }) => async (values: any) => {
  const testScheme = options && options.ignoreRequire ? ignoreRequire(scheme) : scheme;
  return new Promise<ErrorField[] | null>((resolve, reject) => {
    try {
      new Validator(testScheme).validate(values, resolve);
    } catch (e) {
      reject(e);
    }
  });
};

function ignoreRequire(scheme) {
  return Object.keys(scheme).reduce((collection, key) => ({
    ...collection,
    [key]: scheme[key].map((rule) => ({
      ...rule,
      required: false,
    })),
  }), {});
}
