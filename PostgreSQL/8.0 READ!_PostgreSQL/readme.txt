You should create new database to run projects successfully

Create the necessary tables and then import .csv files

EX:
Open the pgAdmin -> create new database "world"
->schemas -> tables -> query tool 

-> CREATE TABLE capitals (
	id SERIAL PRIMARY KEY,
	country VARCHAR(45),
	capital VARCHAR(45)
);

-> run (returned successfully) -> refresh the tables
-> capitals -> view/edit -> all rows (there is no any data OK)
-> import/export data -> select capitals.csv
-> options -> header (turn on)
-> columns (check OK) -> OK
-> tables -> capitals -> proporties -> view data (check OK)


------> than create a new table "flags" and do same thing for flags. Goodluck.

-> CREATE TABLE flags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(45),
	flag TEXT
);