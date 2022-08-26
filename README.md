# Monestco

> Last updated by Justin Hu, 2022/08/26  
> add recommendation engine related content

# Important
Branch protection has been enabled for this repository thus no direct push to the main branch. 
Submit your change via a pull request.  

To cancel branch protection,  just to GitHub repo -> Settings -> Code and automation ->Branches. 

# The Web App

## About
> [Monest](https://www.monest.co/) provides consumers
with the information they
need to make responsible
purchasing decisions.

### Run locally
Clone the  repo to your local environment.

#### Frontend

navigate to client folder,
run ***npm install*** to install all node.js packages from package.json, 
then **_npm start_** to launch app
> Note that the frontend is a React App.   
> So when run client via *npm start*, it's running on top of the default web server provided by React App, which is enough to debug frontend only.  
> If you want the frontend works with the backend,  you have to configure a proxy to the backend in _**package.json**_:   
> 
> "proxy": "http://localhost:8000", where our backend is run on port:8000


#### Serve

##### Prerequisite:
1. Install Python    
   Download latest Python release from to https://www.python.org/ and install it.
2. Install all Python packages defined in **requirements.txt**
3. Install PostgreSQL, please refer to https://www.postgresql.org/
4. Create a database 
> you can create a database, then update the database info in the _**~/server_new/settings.py**_ file, line 90 ;  
> Or when create the database,  use keep the **_db_name, user_name and password_** the same as what is in the **_~/server_new/settings.py_**


##### Run the serve 
In the project folder, 

run

**_python manage.py migrate_**

to create tables in the database. 

run  
**_python manage.py runserver 8000_**  
to start the backend.

##### Create/Import data to database
There are many way to input data to the database,  here are two:
1. You can log in to the admin portal(**_localhost:8000/admin_**) to input data manually
2. You can import some prepared data(**_~monest/migrations/monset.sql_**) to the database


#### Note

>Note that the backend end is a Python Django app. It can run with the front end or run independently without running the frontend.  
> What you have to do is build the frontend to static files and serve those static files through Django.  
> a. build frontend    
> **_react-scripts build_**   
> b. collect static files  
> **_python manage.py collectstatic_**   
> c. start Django app  
> **_python manage.py runserver 8000_**


# Recommendation Engine

## Web crawler
Monest leverages web scraping to fetch apparel products info to its database and gives
recommendations based the dataset. 

### Base Downloader
There is a base downloader class in **_~/recommendation/data_engine/base_downloader.py_** serves the
base abstract of all crawler. When developer crawlers for certain brand, you should inherit this
base class.

A working example of crawler for H&M could be found at **_~/recommendation/data_engine/H_and_M.py_**

### Schedule Periodic Scraping Tasks

#### Write Scheduled Jobs
Current implementation utilizes scheduled jobs from django-extensions.

All tasks are located at **_~/recommendation/jobs_** and the folder is organized by the interval of jobs
1. daily
2. hourly
3. monthly
4. weekly
5. years

If you like to creat your schedule jobs,  please inherit BaseJob class. 
A working example of H&M downloader job can be found at **_~/recommendation/jobs/weekly/update_h7m.py_**

#### Run Scheduled Jobs
You can start schedule jobs very easily:
>@hourly /path/to/my/project/manage.py runjobs hourly  
>@daily /path/to/my/project/manage.py runjobs daily  
>@weekly /path/to/my/project/manage.py runjobs weekly  
>@monthly /path/to/my/project/manage.py runjobs monthly  


### Future Deployment
You may need to run those schedule jobs at other machines for better performance in the future. 
In such case, celery can be used as asynchronous task executor. RabbitMQ or Redis are good options
for message broker. 


## Todo
1. scheduled jobs to clear outdated data for products info
2. implement crawlers for other brands