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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const Post_1 = require("../entity/Post");
const ErrorModel_1 = require("../models/ErrorModel");
const PostsService_1 = require("../services/PostsService");
let PostController = class PostController {
    constructor() {
        this.postsService = typedi_1.Container.get(PostsService_1.default);
    }
    async get(id) {
        try {
            let post = await this.postsService.getPost(id);
            if (post) {
                return post;
            }
            return {};
        }
        catch (e) {
            let error = new ErrorModel_1.default();
            error.code = 100;
            error.message = 'Falha ao recuperar post';
            console.log(e);
            return error;
        }
    }
    async post(post) {
        if (Post_1.default.validatePost(post)) {
            console.log(post);
        }
    }
};
__decorate([
    routing_controllers_1.Get('/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "get", null);
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.default]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "post", null);
PostController = __decorate([
    routing_controllers_1.Controller('/post'),
    __metadata("design:paramtypes", [])
], PostController);
exports.default = PostController;
//# sourceMappingURL=PostController.js.map