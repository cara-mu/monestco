# Monestco

# About
> [Monest](https://www.monest.co/) provides consumers
with the information they
need to make responsible
purchasing decisions.

## Run locally

### Client

navigate to client folder,
run **npm install** to install all packages from package.json, 
then **npm start** to launch app
> Note that the frontend is a React App.   
> So when run client via *npm start*, it's runing on top of the default web server provided by React App, which is enough to debug frontend only.  
> If you want the frontend works with the backend,  you have to configure a proxy to the backend in package.json:   
> 
> "proxy": "http://localhost:8000", where our backend is run on port:8000


### Serve
In the project folder, run    

**python manage.py runserver 8000**

>Note that backend end is a Python Django app can it also can work independently without running the frontend.
> What you have to do is build the frontend to static files and serve those static files through Django.  
> a. build frontend    
> react-scripts build   
> b. collect static files
> python manage.py collectstatic   
> c. start Django app  
> python manage.py runserver 8000