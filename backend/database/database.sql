CREATE DATABASE company;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    password TEXT
    creationDate DATE
)