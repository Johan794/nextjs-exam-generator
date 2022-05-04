create table if not exists users (
    id serial not,
    username varchar(50) not null unique,
    user_password varchar(7) not null unique,
    email varchar(50) not null unique,
    is_estudent boolean not null,
    primary key (id)
);

create table if not exists exams (
    id serial not null,
    access_code varchar(50) not null unique,
    subject_exam varchar(50) not null  unique,
    creator integer not null unique,
    primary key (id),
   	CONSTRAINT fk_exam foreign key (creator) references users(id)
);

create table if not exists questions (
    id serial not null,
    question varchar(50) not null unique,
    subject_exam varchar(50) not null,
    corect_answer varchar(50) not null unique,
    option1 varchar(50) not null,
    option2 varchar(50) not null,
    option3 varchar(50) not null,
    option4 varchar(50) not null,
    question_percentage integer not null,
    exam_id int not null,
    primary key (id),
    CONSTRAINT fk_question foreign key(exam_id) references exams(id)
);



create table if not exists grades (
    id serial not null,   
    id_user int not null,
    id_exam int not null,
    grade integer not null,
    primary key (id),
  	CONSTRAINT fk_id_user  foreign key (id_user) references users(id),
    CONSTRAINT fk_id_exam foreign key (id_exam) references exams(id)
);


insert into users(username,user_password,email,is_estudent) values ('admin','test','icesi.donchimbo@icesi.edu.co',true);
insert into users(username,user_password,email,is_estudent) values ('admin2','test2','icesi.esteProfesorchimbo@icesi.edu.co',false);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id) values ('¿Cuál es la capital de Colombia?','Geografia','Bogota','Cali','Bogota','Medellin','Cartagena',10,1);INSERT INTO exams (access_code,subject_exam,creator) values (4412,'Geografia',2);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id) 
values ('¿Cuál es la capital de Colombia?','Geografia','Bogota','Cali','Bogota','Palmira','Cartagena',10,1);
SELECT * FROM users;