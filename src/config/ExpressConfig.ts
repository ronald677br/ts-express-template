import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as cors from 'cors';
import { createExpressServer, useExpressServer } from 'routing-controllers';
export default class ExpressConfig {
	app: express.Express;

	constructor() {
		this.app = this.setupControllers();
		this.app.use(cors());
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}

	setupControllers() {
		const controllersPath = path.resolve('build', 'src', 'controllers') + "/*.js";
		return createExpressServer({
			controllers: [
				controllersPath
			],
			routePrefix: '/api'
		});
	}
}