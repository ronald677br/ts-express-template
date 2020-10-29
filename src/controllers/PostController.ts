import { Controller, Get} from "routing-controllers";
import { Container } from "typedi";
import Post from "../entity/Post";
import PostsService from "../services/PostsService";

@Controller('/post')
export default class PostController {

	public postsService: PostsService;

	constructor() {
		this.postsService = Container.get(PostsService);
	}

	@Get()
	public async get(): Promise<Post> {
		return new Post();
	}
}