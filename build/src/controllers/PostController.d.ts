import Posts from "../entity/Post";
import PostsService from "../services/PostsService";
export default class PostController {
    postsService: PostsService;
    constructor();
    get(id: number): Promise<{}>;
    post(post: Posts): Promise<any>;
}
