export default class PostgresService {
    private connectionString;
    constructor();
    private client;
    setupTypeORM(): Promise<void>;
    connectDb(): Promise<void>;
    disconnectDb(): Promise<void>;
}
