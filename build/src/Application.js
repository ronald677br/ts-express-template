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
const ExpressConfig_1 = require("./config/ExpressConfig");
const PostgresService_1 = require("./services/PostgresService");
const PORT = 3000;
class Application {
    constructor() {
        this.express = new ExpressConfig_1.default();
        this.postgresService = typedi_1.default.get(PostgresService_1.default);
        this.postgresService.connectDb();
        this.express.app.listen(PORT, () => console.log('[express] -> app started on port ' + PORT));
        process.on('exit', async () => {
            await this.postgresService.disconnectDb();
        });
    }
}
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", PostgresService_1.default)
], Application.prototype, "postgresService", void 0);
exports.default = Application;
//# sourceMappingURL=Application.js.map