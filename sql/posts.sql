drop table if exists posts;
create table posts(
	id serial primary key,
	title text,
	innerContent text,
	dateCreated timestamptz,
	visualizations int default 0
);

insert into posts(title, innercontent ,datecreated ,visualizations) values('titulo', 'conteudo', now(), 0);
