import type express from 'express';
import { expressLoader } from './expressLoader';

export const loaders = async (app: express.Application) => {
  await expressLoader(app);
};
