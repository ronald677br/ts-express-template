drop table if exists posts;
create table posts(
	id serial primary key,
	title text,
	innerContent text,
	dateCreated timestamptz,
	visualizations int
);

drop table if exists users;
create table users(
	id serial primary key,
	name text,
	email text,
	role text,
	password text
);


insert into posts(title, innercontent ,datecreated ,visualizations) values('titulo', 'conteudo', now(), 0);
