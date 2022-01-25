# Monestco

> Last updated by Justin Hu, 2021/12/26

# About
> [Monest](https://www.monest.co/) provides consumers
with the information they
need to make responsible
purchasing decisions.

## Run locally
Clone the  repo to your local environment.

### Frontend

navigate to client folder,
run ***npm install*** to install all node.js packages from package.json, 
then **_npm start_** to launch app
> Note that the frontend is a React App.   
> So when run client via *npm start*, it's running on top of the default web server provided by React App, which is enough to debug frontend only.  
> If you want the frontend works with the backend,  you have to configure a proxy to the backend in _**package.json**_:   
> 
> "proxy": "http://localhost:8000", where our backend is run on port:8000


### Serve

#### Prerequisite:
1. Install Python    
   Download latest Python release from to https://www.python.org/ and install it.
2. Install all Python packages defined in **requirements.txt**
3. Install PostgreSQL, please refer to https://www.postgresql.org/
4. Create a database 
> you can create a database, then update the database info in the _**~/server_new/settings.py**_ file, line 90 ;  
> Or when create the database,  use keep the **_db_name, user_name and password_** the same as what is in the **_~/server_new/settings.py_**


#### Run the serve 
In the project folder, 

run

**_python manage.py migrate_**

to create tables in the database. 

run  
**_python manage.py runserver 8000_**  
to start the backend.

#### Create/Import data to database
There are many way to input data to the database,  here are two:
1. You can log in to the admin portal(**_localhost:8000/admin_**) to input data manually
2. You can import some prepared data(**_~monest/migrations/monset.sql_**) to the database


### Note

>Note that the backend end is a Python Django app. It can run with the front end or run independently without running the frontend.  
> What you have to do is build the frontend to static files and serve those static files through Django.  
> a. build frontend    
> **_react-scripts build_**   
> b. collect static files  
> **_python manage.py collectstatic_**   
> c. start Django app  
> **_python manage.py runserver 8000_**


