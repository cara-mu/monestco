const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const sqlite3 = require('sqlite3');

const exampleData = require('../data/dummy.json');

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
      console.error("Error opening database " + err.message);
  } else {

      db.run('CREATE TABLE company( \
          company_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          name NVARCHAR(20)  NOT NULL,\
          slogan NVARCHAR(100)\
      )', (err) => {
          if (err) {
              console.log("Table already exists.");
          }else{
            let insert = 'INSERT INTO company (name, slogan) VALUES (?,?)';
            db.run(insert, ["Nike", "Just do it"]);
            db.run(insert, ["Adidas", "3 stripes"]);
            db.run(insert, ["State Farm", "Like a good neighbor State Farm is there!!"]);

          }
      });
  }
});

app.get('/', (req, res) => {
  res.status(200).send('Monest Home Page!')
})

// This would just be the page for singular company
app.get('/company/:companyID', function(req,res,next){
  var companyID = req.params.companyID;

  db.get("SELECT * FROM company WHERE company_id = ?", [companyID], (err, row) => {
    if (err) {
        res.status(400).json({ "error": err.message });
        return;
    }
    if(row){
      res.status(200).json(row);
    }

    next();
});
})

//Comparison Page with these 3 companies
app.get('/comparison/:companyID1/:companyID2/:companyID3', function(req,res,next){
  var companyID1 = req.params.companyID1;
  var companyID2 = req.params.companyID2;
  var companyID3 = req.params.companyID3;

  db.all("SELECT * FROM company WHERE company_id = ? OR company_id = ? OR company_id  =?", [companyID1, companyID2, companyID3], (err, rows) => {
    if (err) {
        res.status(400).json({ "error": err.message });
        return;
    }
    if(rows){
      res.status(200).json({rows});
    }
    next();
});
})

app.get("/companies", (req, res, next) => {
  db.all("SELECT * FROM company", [], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      if(rows){
        res.status(200).json({ rows });
      }
  });
});

// Error page
app.get('*', function(req, res) {
  res.status(404).send("Error Page")
})

app.listen(port, () => {
  console.log(`Server is listening on`, port)
})