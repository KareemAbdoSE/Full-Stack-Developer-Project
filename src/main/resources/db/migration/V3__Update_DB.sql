DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
                          id SERIAL PRIMARY KEY,
                          name TEXT NOT NULL,
                          email TEXT NOT NULL,
                          age INT NOT NULL
);

ALTER TABLE customer
    ADD CONSTRAINT customer_email_unique UNIQUE (email);