"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressConfig_1 = require("./config/ExpressConfig");
class Application {
    constructor() {
        this.express = new ExpressConfig_1.default();
        this.express.app.listen(3000, () => console.log('app started on port 3000, my king'));
    }
}
exports.default = Application;
//# sourceMappingURL=Application.js.map