"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const routing_controllers_1 = require("routing-controllers");
class ExpressConfig {
    constructor() {
        this.app = this.setupControllers();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    setupControllers() {
        const controllersPath = path.resolve('build', 'src', 'controllers') + "/*.js";
        return routing_controllers_1.createExpressServer({
            controllers: [
                controllersPath
            ],
            routePrefix: '/api'
        });
    }
}
exports.default = ExpressConfig;
//# sourceMappingURL=ExpressConfig.js.map