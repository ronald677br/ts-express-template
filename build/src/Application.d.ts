import ExpressConfig from "./config/ExpressConfig";
import PostgresService from "./services/PostgresService";
export default class Application {
    express: ExpressConfig;
    postgresService: PostgresService;
    constructor();
}
