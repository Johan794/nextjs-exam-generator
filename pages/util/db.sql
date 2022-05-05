create table if not exists users (
    id serial,
    username varchar(50) not null unique,
    user_password varchar(7) not null unique,
    email varchar(50) not null unique,
    is_estudent boolean not null,
    primary key (id)
);

create table if not exists exams (
    id serial,
    access_code varchar(50) not null unique,
    subject_exam varchar(50) not null  unique,
    creator integer not null unique,
    primary key (id),
   	CONSTRAINT fk_exam foreign key (creator) references users(id)
);

create table if not exists questions (
    id serial,
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
    id serial,   
    id_user int not null,
    id_exam int not null,
    grade integer not null,
    primary key (id),
  	CONSTRAINT fk_id_user  foreign key (id_user) references users(id),
    CONSTRAINT fk_id_exam foreign key (id_exam) references exams(id)
);


insert into users(username,user_password,email,is_estudent) values ('admin','test','icesi.donchimbo@icesi.edu.co',true);
insert into users(username,user_password,email,is_estudent) values ('admin2','test2','icesi.esteProfesorchimbo@icesi.edu.co',false);

INSERT INTO exams (access_code,subject_exam,creator) values (4412,'Geografia',1);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id) 
values ('¿Cuál es la capital de Colombia?','Geografia','Bogota','Cali','Bogota','Palmira','Cartagena',10,1);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál es la capital de Venezuela?','Geografia','Caracas','Bogota','Caracas','Palmira','Cartagena',30,1);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál es la capital de Rusia?','Geografia','Moscu','Cali','Moscu','Palmira','Cartagena',20,1);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál es la capital de Ecuador?','Geografia','Quito','Cali','Quito','Palmira','Cartagena',20,1);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál es la capital de Brasil?','Geografia','Brasilia','Cali','Brasilia','Palmira','Cartagena',20,1);


insert into exams (access_code,subject_exam,creator) values (1516,'Matematicas',2);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál es la raiz cuadrada de 144?','Matematicas','12','12','31','144','-0',20,2);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuanto es 1 + 1?','Matematicas','2','12','31','144','2',20,2);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál NO es la raiz cuadrada de 144?','Matematicas','PEZ','12','12','12','PEZ',20,2);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál es la raiz cuadrada de 169?','Matematicas','13','12','13','144','-0',20,2);
insert into questions (question,subject_exam,corect_answer,option1,option2,option3,option4,question_percentage,exam_id)
values ('¿Cuál  es 62/2?','Matematicas','31','13','31','144','-0',20,2);
