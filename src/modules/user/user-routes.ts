import { Router } from 'express';
import type { JsonValidatorType } from '~/middlewares';
import { jsonValidator } from '~/middlewares';

const router = Router();

const usersPostSchema: JsonValidatorType = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
  },
};

router.post('/', jsonValidator(usersPostSchema));

const usersGetSchema: JsonValidatorType = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
  },
};

router.get('/', jsonValidator(usersGetSchema));

export default {
  path: '/users',
  router,
};
