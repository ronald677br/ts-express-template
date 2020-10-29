import { Service } from "typedi";
import { Client } from 'pg';
@Service()
export default class PostgresService {
	private connectionString = 'postgresql://postgres:123456789@localhost:5432/lawyer';
	private client: Client = new Client({
		connectionString: this.connectionString
	});

	private connectDb() {
		this.client.connect();
	}
	constructor() {
		this.connectDb();
	}

}