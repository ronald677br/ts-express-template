"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const Post_1 = require("../models/Post");
const PostsService_1 = require("../services/PostsService");
let PostController = class PostController {
    constructor() {
        this.postsService = typedi_1.Container.get(PostsService_1.default);
    }
    async get() {
        return new Post_1.default(1, 'teste');
    }
};
__decorate([
    routing_controllers_1.Get()
], PostController.prototype, "get", null);
PostController = __decorate([
    routing_controllers_1.Controller('/post')
], PostController);
exports.default = PostController;
//# sourceMappingURL=PostController.js.map