import * as express from 'express';
export default class ExpressConfig {
    app: express.Express;
    constructor();
    setupControllers(): any;
}
