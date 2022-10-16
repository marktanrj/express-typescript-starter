import express from 'express';
import { loaders } from './loaders';

const config = require('config');

export const main = async () => {
  const app = express();
  await loaders(app);

  app.listen(config.port, () => {
    console.log(`Your server is running on PORT ${config.port}`);
  });
};
