"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const pg_1 = require("pg");
const typeorm_1 = require("typeorm");
let PostgresService = class PostgresService {
    constructor() {
        this.connectionString = 'postgresql://postgres:123456789@localhost:5432/lawyer';
        this.client = new pg_1.Client({
            connectionString: this.connectionString
        });
        this.setupTypeORM();
    }
    async setupTypeORM() {
        await typeorm_1.createConnection();
    }
    async connectDb() {
        console.log("[db] -> Connecting to Postgres server...");
        await this.client.connect();
        console.log("[db] -> Postgres Connected!");
    }
    async disconnectDb() {
        console.log("[db] -> Disconnecting from Postgres server...");
        await this.client.end();
        console.log("[db] -> Postgres disconnected!");
    }
};
PostgresService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], PostgresService);
exports.default = PostgresService;
//# sourceMappingURL=PostgresService.js.map