import { Service } from "typedi";
import { Client } from 'pg';
import { createConnection } from "typeorm";

@Service()
export default class PostgresService {
	private connectionString = 'postgresql://postgres:123456789@localhost:5432/lawyer';

	constructor() {
		this.setupTypeORM();
	}

	private client: Client = new Client({
		connectionString: this.connectionString
	});

	public async setupTypeORM(): Promise<void> {
		await createConnection();
	}

	public async connectDb(): Promise<void> {
		console.log("[db] -> Connecting to Postgres server...");
		await this.client.connect();
		console.log("[db] -> Postgres Connected!");
	}

	public async disconnectDb(): Promise<void> {
		console.log("[db] -> Disconnecting from Postgres server...");
		await this.client.end();
		console.log("[db] -> Postgres disconnected!");
	}
}