# How to backup and restore postgre db (on and between Keroku)

By Justin Hu   
2021/11/24

Refer to: https://devcenter.heroku.com/articles/heroku-postgres-import-export

## Backup and Restore on Heroku
https://devcenter.heroku.com/articles/heroku-postgres-backups   

>heroku pg:backups:capture --app appname    
> heroku pg:backups:restore b101 DATABASE_URL --app appname    


## Import and Export between local and Heroku
https://devcenter.heroku.com/articles/heroku-postgres-import-export

> pg_dump -Fc --no-acl --no-owner -h localhost -U myuser mydb > mydb.dump   
> heroku pg:backups:restore '<SIGNED URL>' DATABASE_URL   

> Note this restore with a url failed for me for many times, error messages are    
> An error occurred and the backup did not finish.   
 ▸    
 ▸    waiting for restore to complete   
 ▸    pg_restore finished with errors   
 ▸    waiting for download to complete  
 ▸    download finished with errors   
 ▸    please check the source URL and ensure it is publicly accessible   



> Lastly, i dump the db to a plain sql file (same pg_dump tool)   
> Then run sql and it worked:   
> heroku pg:psql<monset.sql


