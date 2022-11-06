import type {
  Request,
  Response,
  NextFunction,
} from 'express';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import { config } from '~/config';
import { store } from '~/database/database';

export const expressLoader = (app: express.Application) => {
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(cors());

  app.use(
    session({
      ...config.session,
      store,
    }),
  );

  app.get('/', (_req: Request, res: Response) => {
    res.send('Server running');
  });

  // error handler
  app.use((err: Error, _req: Request, _res: Response, next: NextFunction) => {
    if (!err) {
      next();
    }
  });

  return app;
};
