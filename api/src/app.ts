import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { IController } from './types';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: IController[], port: number) {
    this.app = express();
    this.port = port;

    this.connect();
    this.initThirdPartyMiddlewares();
    this.initControllers(controllers);
    this.initErrorHandling();
  }

  private connect(): void {
    // TODO: setup connection to postgresql database
  }

  private initThirdPartyMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(cookieParser());
  }

  private initControllers(controllers: IController[]): void {
    controllers.forEach((controller: IController) => {
      this.app.use('/', controller.router);
    });
  }

  private initErrorHandling(): void {
    // TODO: setup error handling middleware
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on http://localhost:${this.port}`);
    });
  }
}

export default App;
