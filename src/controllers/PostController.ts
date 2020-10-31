import { Body, Controller, Get, Param, Post} from "routing-controllers";
import { Container } from "typedi";
import Posts from "../entity/Post";
import ErrorModel from "../models/ErrorModel";
import PostsService from "../services/PostsService";

@Controller('/post')
export default class PostController {

	public postsService: PostsService;

	constructor() {
		this.postsService = Container.get(PostsService);
	}

	@Get('/:id')
	public async get(@Param('id') id: number): Promise<{}> {
		try {
			let post = await this.postsService.getPost(id);
			if (post) {
				return post;
			}
			return {};
		} catch(e) {
			let error = new ErrorModel();
			error.code = 100;
			error.message = 'Falha ao recuperar post';
			console.log(e);
			return  error;
		}
	}

	@Post()
	public async post(@Body() post: Posts): Promise<any> {
		if (Posts.validatePost(post)) {
			console.log(post);
		}
	}
}