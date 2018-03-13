declare module 'async-validator' {
  export type Rule = Partial<{
    type: 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'array' | 'object' | 'enum' | 'date' | 'email';
    required: boolean;
    pattern: RegExp;
    length: number;
    message: string;
  }>;
  export interface Scheme {
    [key: string]: Rule[];
  }
  export interface ErrorField {
    field: string;
    message: string;
  }
  export default class Validator {
    constructor(scheme: Scheme);
    public validate(values: { [key: string]: any }, callback: (errors: ErrorField[]) => void): void;
  }
}
