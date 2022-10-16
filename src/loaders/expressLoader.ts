import express, {
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
import helmet from 'helmet';

export const expressLoader = (app: express.Application) => {
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(cors());

  app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!');
  });

  // error handler
  app.use((err: Error, _req: Request, _res: Response, next: NextFunction) => {
    if (!err) {
      next();
    }
  });

  return app;
};
