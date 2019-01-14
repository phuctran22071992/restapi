import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import { openConnection } from "./config";
import { mongoDbAddress } from "./common/constants";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.doCreateApp();
    this.routePrv.routes(this.app);
    this.connectDBServer();
  }

  private doCreateApp() {
    this.app = express();

    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private async connectDBServer() {
    try {
      await openConnection({ mongoDbAddress });
      console.log("DONE: Connected to mongoose.");
    } catch (error) {
      console.error("ERROR: to connect to mongoose.");
      console.log(error);
    }
  }
}

export default new App().app;
