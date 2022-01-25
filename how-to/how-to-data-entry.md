# How to data entry

>by Justin Hu   
created in 2021/11/24  
last updated in 2021/12/16



This is a guide on how to record data to the database with the new backend architecture.    

# 1 Applications
> a. migrate existing data from old SQLite database to the new platform   
> b. add new info(data for new companies) to the new platform

# 2 Must Read

## 2.1 Do not input duplicated records
The new database design has significantly reduced redundant records in the database through better design.

>*So Do Not input duplicates in the database.*


## 2.2 Built-in parent-subsidiary logic for scores and its associated citations   
The new backend has the **_parent and subsidiary logic_** built in for all scores and associated citations.  
Basically,  the subsidiary will inherit all records from its parent,  and override certain records with its 
unique values.  
The following examples illustrates different scenarios:

1. A is a company and has no parent company defined(**_db_company_parent_** is empty ) in the database.    
   Then, all query for A will return the records of A directly.


2. A is the subsidiary company and B is its parent(defined by **_db_company_parent_**).  
   Parent B has the following scores in database:   
   `  A:  30,  
      A1:  8,  
      A1.1: 6     
        ...  
      BScore :  20   
      B1:  13   
      B1.2 : 6   
        ...  
      C   
      ....  
      D     
        ....
`   
  Subsidiary A has no records in the database. 
  In this case,  all query for A will return the records of B,   A inherits all records from B.


3. Same Parent B from above,   A is the subsidiary.  
   In the database,  A overrides the A1.1 score with its unique value:  
   `A1.1: 5`  
   The query for A will give the following result:  
       `  A:  30,  
      A1:  8,  
      A1.1: 5     
        ...  
      BScore :  20   
      B1:  13   
      B1.2 : 6   
        ...  
      C   
      ....  
      D     
        ....
`      
    A will inherit all records from B and also has its unique value of A1.1.


# 3 Data entry
 Sign in to the admin portal(host/admin) and input data there. 
 

# 4 Caveat
> When a subsidiary override certain scores, say A1.1,  it has to override all its direct higher lever 
> scores at the same time : A1, A.    

This is because of current static implementation of the hierarchy of scores.

All is score is organized is a hierarchy:   
L1:   A,  B,  C,  D  ,  each represents a category    
L2:   A1, A2, .....    
L3:   A1.1,  A1.2,  A1.3 .....   

The score of a higher level is the sum of all its child level, for example:    
A1 = sum(A1.1, A1.2,  A1.3, A1.4,...)   
A = sum(A1, A2, A3, A4,....)

>Current implementation has all higher level score stored in the database as static values instead of calculating 
them dynamically. 

There are pros and cons of such static approach.     
Pros:    
faster for higher level queries.  And there are a lot of such queries.    
Cons.   
When update a lower level score,  all its parent levels also need to be updated.



# 5 Next Steps

## 5.1  Dynamic Scores for higher level metrics.    
It will make it easier for managing data in database, which makes it the right thing to do 
in the long term.  However,  it will require a lof ot work of redesign all relevant logic and reimplement relevant APIs.

Conclusion:  Recommended for long-term improvement.

## 5.2  Parent and Subsidiary logic for political contribution 

Need more discussion



