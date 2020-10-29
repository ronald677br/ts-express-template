import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Post {
	
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public innerContent: string;

	public dateCreated: Date;

	@Column()
	public visualizations: number;

	@Column()
	public title: string;
}