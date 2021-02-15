const express = require('express')
const app = express()
const port = process.env.PORT || 3080
app.set('port', port)
const sqlite3 = require('sqlite3');
var cors = require("cors");
app.use(cors());

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
      console.error("Error opening database " + err.message);
  } else {

      db.run('CREATE TABLE company( \
          company_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          name NVARCHAR(20) NOT NULL,\
          subsidiary INTEGER, \
          description NVARCHAR(100), \
          politicalaffiliation NVARCHAR(100), \
          logo NVARCHAR(100), \
          industrystandards_id INTEGER UNIQUE NOT NULL, \
          industry_id INTEGER NOT NULL \
          \
      )', (err) => {
          if (err) {
              console.log("Company table already exists.");
          } else{
            let insert = 'INSERT INTO company (name, industrystandards_id, industry_id) VALUES (?,?,?)';
            db.run(insert, ["Nike", 1, 1]);
            db.run(insert, ["Adidas", 2, 1]);
            db.run(insert, ["Timberland", 3, 1]);
          }
      });

      db.run('CREATE TABLE industrystandards( \
          industrystandards_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
          company_id INTEGER UNIQUE NOT NULL, \
          diversityandinclusion INTEGER, \
          workerexploitation INTEGER, \
          wasteandpollution INTEGER, \
          sustainablematerials INTEGER \
          \
      )', (err) => {
          if (err) {
            console.log("Industry Standards table already exists.");
          } else {
            let insert = 'INSERT INTO industrystandards (company_id, diversityandinclusion, workerexploitation, wasteandpollution, sustainablematerials) VALUES (?,?,?,?,?)';
            db.run(insert, [1, 20, 40, 50, 70]);
            db.run(insert, [2, 80, 50, 10, 30]);
            db.run(insert, [3, 90, 15, 50, 30]);
          }
      });

      db.run('CREATE TABLE industry( \
        industry_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
        industry NVARCHAR(20), \
        diversityandinclusion INTEGER, \
        workerexploitation INTEGER, \
        wasteandpollution INTEGER, \
        sustainablematerials INTEGER \
        \
    )', (err) => {
        if (err) {
          console.log("Industry table already exists.");
        } else {
          let insert = 'INSERT INTO industry (industry, diversityandinclusion, workerexploitation, wasteandpollution, sustainablematerials) VALUES (?,?,?,?,?)';
          db.run(insert, ["Shoes", 50, 50, 50, 50]);
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

app.post('/companydetails', (req, res) => {
  const companyname = req.query['0'];
  db.all("SELECT diversityandinclusion, workerexploitation, wasteandpollution, sustainablematerials FROM industrystandards WHERE company_id IN (SELECT company_id FROM company WHERE name = ?)", [companyname], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
      console.log(rows);
    }
  });
})

app.get('/allcompanies', (req, res) => {
  db.all("SELECT name FROM company", [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
    }
  });

});

app.get('/industry', (req, res) => {
  var industryID = 1;
  db.all("SELECT diversityandinclusion, workerexploitation, wasteandpollution, sustainablematerials FROM industry WHERE industry_id = ?", [industryID], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
    }
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