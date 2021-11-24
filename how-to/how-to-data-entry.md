# How to data entry

by Justin Hu   
2021/11/24

This is a guide on how to record data to the database with the new backend architecture.    

# 1 Applications
> a. migrate existing data from old SQLite database to the new platform   
> b. add new info(data for new companies) to the new platform

# 2 Must Read
The new database design has significantly reduced redundant records in the database through carefully design.

>*So Do Not input duplicates in the database.*

For the case of *parent and subsidiary*,  subsidiary company should have a record in the company table and utilize the 'Parent' column to indicates its parent company.
Then if subsidiary inherits parent's scores,  no need to input scores for the subsidiary again.  

>*The backend would take care of the parent/subsidiary for scores, political_assocation. Basically, the backend will first look up scores and political_associations records for the subsidiary.If found, then return the results. Otherwise, the backend will look up its parent's records and return results.

>Also backend does not support partial inheritance. In other words, even the subsidiary only has one score different from the parent, you should still input the whole set of data of the subsidiary.


# 3 Data entry
 Sign in to the admin portal and input data there. 