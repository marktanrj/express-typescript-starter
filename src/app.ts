import express from 'express';
import { loaders } from '~/loaders';
import { logger } from '~/logger/logger';
import { config } from '~/config';

export const main = async () => {
  const app = express();
  await loaders(app);

  app.listen(config.port, () => {
    logger.info(`Your server is running on PORT ${config.port}`);
  });
};
