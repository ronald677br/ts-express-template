import Container, { Inject } from "typedi";
import ExpressConfig from "./config/ExpressConfig";
import PostgresService from "./services/PostgresService";

export default class Application {
	express: ExpressConfig;

	@Inject()
	postgresService: PostgresService;

	constructor() {
		this.express = new ExpressConfig();
		this.postgresService = Container.get(PostgresService);
		this.postgresService.connectDb();
		this.express.app.listen(3000, () => console.log('[express] -> app started on port 3000'));

		process.on('exit', async () => {
			await this.postgresService.disconnectDb();
		});
	}
}