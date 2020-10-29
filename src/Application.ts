import ExpressConfig from "./config/ExpressConfig";

export default class Application {
	express: ExpressConfig;
	constructor() {
		this.express = new ExpressConfig();
		this.express.app.listen(3000, () => console.log('app started on port 3000, my king'));
	}
}