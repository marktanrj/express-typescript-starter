import type { List, ValidateFunction } from 'express-json-validator-middleware';
import { Validator } from 'express-json-validator-middleware';

const { validate } = new Validator({});

export type JsonValidatorType = List<ValidateFunction>;
export const jsonValidator = validate;
