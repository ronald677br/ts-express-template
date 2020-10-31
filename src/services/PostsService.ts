import { Service } from "typedi";
import Posts from "../entity/Post";
import PostgresService from "./PostgresService";

@Service()
export default class PostsService extends PostgresService {
	constructor() {
		super();
	}

	public async getPost(id: number): Promise<Posts | null> {
		let post = await Posts.findOne(id);
		return post? post: null;
	}
}
