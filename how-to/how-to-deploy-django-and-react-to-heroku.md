# How to deploy Django(backend) + React(frontend) to Heroku

by Justin Hu,
2021/11/15

## 1. Creat App on Heroku
Login to Heroku and creat an app 'monest-test-backend' with user 'cara.mu729@hotmail.com'

##2. Install Heroku CLI
refer to Guidance on Heroku

### Add Heroku romote
> $ heroku login  
> $ cd ~/monestco  
> $ git init (optional, for creating git repo the first time)   
>                ignore if it's already git repo  
> $ heroku git:remote -a monest-test-backend  

### Configure Heroku buildPack
>$ heroku buildpacks:add --index 1 heroku/nodejs  
>$ heroku buildpacks:add --index 2 heroku/python

### Set PostgreSQL as database
>$ heroku addons:create heroku-postgresql:hobby-dev  

### Creat Procfile
creat a Procfile under root directory 


### Deploy Application
> $ git add .  (optional, if there are new changes to commit)   
> $ git commit -am "make it better"  ((optional, if there are new changes to commit))  
> $ git push heroku main
 

### Test 