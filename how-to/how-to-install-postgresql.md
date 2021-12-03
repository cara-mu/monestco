# How to install PostgreSQL for the new backend?

by Justin Hu  
2021/11/03

## Install PostgreSQL

Different approaches for different platforms, refer to PostgreSQL official website:  https://www.postgresql.org/

## Create Database 
Open the PostgreSQL shell   
> CREATE DATABASE monest;

## Create User 
> CREATE USER monest WITH PASSWORD 'monest@123';   
> ALTER ROLE monest SET client_encoding TO 'utf8';  
> ALTER ROLE monest SET default_transaction_isolation TO 'read committed';   
> ALTER ROLE monest SET timezone TO 'UTC';    
> GRANT ALL PRIVILEGES ON DATABASE monest TO monest;

