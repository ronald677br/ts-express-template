import { BaseEntity } from "typeorm";
export default class Posts extends BaseEntity {
    id: number;
    innerContent: string;
    dateCreated: Date;
    visualizations: number;
    title: string;
    static validatePost(post: Posts): boolean;
}
