### Schema

CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE sandwiches
(
	id int NOT NULL AUTO_INCREMENT,
	sandwiches_name varchar(255) NOT NULL,
	ate BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
