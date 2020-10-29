"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const pg_1 = require("pg");
let PostgresService = class PostgresService {
    constructor() {
        this.connectionString = 'postgresql://postgres:123456789@localhost:5432/lawyer';
        this.client = new pg_1.Client({
            connectionString: this.connectionString
        });
        this.connectDb();
    }
    connectDb() {
        this.client.connect();
    }
};
PostgresService = __decorate([
    typedi_1.Service()
], PostgresService);
exports.default = PostgresService;
//# sourceMappingURL=PostgresService.js.map