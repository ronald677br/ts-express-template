import { Service } from "typedi";
import PostgresService from "./PostgresService";

@Service()
export default class PostsService extends PostgresService {
	constructor() {
		super();
	}

}
