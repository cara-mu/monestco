# How to install and run Django project

by Justin Hu, 2021/10/7

## Install Python 
Get the latest version of Python at https://www.python.org/downloads/ or with your operating system’s package manager.

## Install Django
run the following command in command line:
>$ python -m pip install Django

## Verifying
run the following commands in Python command:
> import django    
> print(django.get_version())    
3.2

### Run the Project
> cd server_new    
> python manage.py runserver

The server should run on localhost:8000, open the browser and check it!