import * as Validator from 'async-validator';

export interface IErrorField {
  field: string;
  message: string;
}

export interface ISchemeOptions {
  checkRequire: boolean;
}

export const validate = (scheme, options: ISchemeOptions = {
  checkRequire: true,
}) => async (values) => {
  const testScheme = options && options.checkRequire
    ? scheme
    : ignoreRequire(scheme);
  return new Promise<IErrorField[] | null>((resolve, reject) => {
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
