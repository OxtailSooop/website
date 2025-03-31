#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "postgres" --dbname "blog" <<-EOSQL
CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT, date TEXT, content TEXT, media TEXT []);
CREATE TABLE IF NOT EXISTS media (id SERIAL PRIMARY KEY, media TEXT);
EOSQL
