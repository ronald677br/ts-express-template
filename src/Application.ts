import Container, { Inject } from "typedi";
import ExpressConfig from "./config/ExpressConfig";
import PostgresService from "./services/PostgresService";
const PORT = 3000;
export default class Application {
	express: ExpressConfig;

	@Inject()
	postgresService: PostgresService;

	constructor() {
		this.express = new ExpressConfig();
		this.postgresService = Container.get(PostgresService);
		this.postgresService.connectDb();
		this.express.app.listen(PORT, () => console.log('[express] -> app started on port ' + PORT));

		process.on('exit', async () => {
			await this.postgresService.disconnectDb();
		});
	}
}