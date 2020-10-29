import Post from "../entity/Post";
import PostsService from "../services/PostsService";
export default class PostController {
    postsService: PostsService;
    constructor();
    get(): Promise<Post>;
}
