import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'posts'})
export default class Posts extends BaseEntity {
	
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({name: 'innercontent'})
	public innerContent: string;

	@Column({name: 'datecreated'})
	public dateCreated: Date;

	@Column()
	public visualizations: number;

	@Column()
	public title: string;

	public static validatePost(post: Posts): boolean {
		if (!post.title || post.title.length <= 0) {
			return false;
		}
		if (!post.innerContent || post.innerContent.length <= 0) {
			return false;
		}
		return true;
	}
}