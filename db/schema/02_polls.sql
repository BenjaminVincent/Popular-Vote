-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS votes CASCADE;
DROP TABLE IF EXISTS choices CASCADE;
DROP TABLE IF EXISTS polls CASCADE;

CREATE TABLE polls (
  id SERIAL PRIMARY KEY NOT NULL,
  question TEXT,
  admin_email VARCHAR(255)
);

CREATE TABLE choices (
  id SERIAL PRIMARY KEY NOT NULL,
  poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
  title TEXT,
  description VARCHAR(255)
);

CREATE TABLE votes (
  id SERIAL PRIMARY KEY NOT NULL,
  choice_id INTEGER REFERENCES choices(id) ON DELETE CASCADE,
  rank INTEGER NOT NULL
);