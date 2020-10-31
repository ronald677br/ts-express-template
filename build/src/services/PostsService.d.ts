import Posts from "../entity/Post";
import PostgresService from "./PostgresService";
export default class PostsService extends PostgresService {
    constructor();
    getPost(id: number): Promise<Posts | null>;
}
