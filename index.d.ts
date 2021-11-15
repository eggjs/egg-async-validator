declare module 'egg' {
  export interface Application {
    validate: (rules: any, data?: any, options?: any) => Promise<String | Array<String> | any>,
  }

  export interface Context {
    validate: (rules: any, data?: any) => Promise<String | Array<String> | any>;
  }
}
