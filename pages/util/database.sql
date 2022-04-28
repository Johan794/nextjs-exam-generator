create table if not exists users (
    id serial not null,
    username varchar(50) not null,
    user_password varchar(7) not null,
    is_estudent boolean not null,
    primary key (id)
);

create table if not exists exams (
    id serial not null,
    access_code varchar(50) not null,
    subject_exam varchar(50) not null,
    creator integer not null,
    primary key (id),
   	CONSTRAINT fk_exam foreign key (creator) references users(id)
);

create table if not exists questions (
    id serial not null,
    question varchar(50) not null,
    corect_answer varchar(50) not null,
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