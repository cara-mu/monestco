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
          category NVARCHAR(20),\
          description NVARCHAR(100), \
          politicalaffiliation NVARCHAR(100), \
          logo NVARCHAR(100), \
          industrystandards_id INTEGER UNIQUE NOT NULL, \
          A INTEGER NOT NULL, \
          B INTEGER NOT NULL, \
          C INTEGER NOT NULL, \
          D INTEGER NOT NULL \
          \
      )', (err) => {
          if (err) {
              console.log("Company table already exists.");
          } else{
            let insert = 'INSERT INTO company (name, industrystandards_id, A, B, C, D) VALUES (?,?,?,?,?,?)';
            db.run(insert, ["Nike", 1, 1, 1, 1, 1]);
            db.run(insert, ["Adidas", 1, 2, 2, 2, 2]);
            db.run(insert, ["Timberland", 1, 3, 3, 3, 3]);
          }
      });

      db.run('CREATE TABLE A ( \
          A_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
          industrystandards_id INTEGER, \
          company_id INTEGER UNIQUE NOT NULL, \
          A INTEGER NOT NULL, \
          A1 INTEGER NOT NULL, \
          A11_score INTEGER NOT NULL, \
          A11_sr NVARCHAR(100) NOT NULL, \
          A11_lr NVARCHAR(100) NOT NULL, \
          A12_score INTEGER NOT NULL, \
          A12_text NVARCHAR(100) NOT NULL, \
          A2 INTEGER NOT NULL, \
          A21_score INTEGER NOT NULL, \
          A21_text NVARCHAR(100) NOT NULL, \
          A22_score INTEGER NOT NULL, \
          A22_text NVARCHAR(100) NOT NULL, \
          A23_score INTEGER NOT NULL, \
          A23_text NVARCHAR(100) NOT NULL, \
          A3 INTEGER NOT NULL, \
          A31_score INTEGER NOT NULL, \
          A31_text NVARCHAR(100) NOT NULL, \
          A32_score INTEGER NOT NULL, \
          A32_text NVARCHAR(100) NOT NULL, \
          A33_score INTEGER NOT NULL, \
          A33_text NVARCHAR(100) NOT NULL, \
          A4 INTEGER NOT NULL, \
          A41_score INTEGER NOT NULL, \
          A41_text NVARCHAR(100) NOT NULL, \
          A42_score INTEGER NOT NULL, \
          A42_text NVARCHAR(100) NOT NULL, \
          A43_score INTEGER NOT NULL, \
          A43_text NVARCHAR(100) NOT NULL \
          \
      )', (err) => {
          if (err) {
            console.log("Discrimination table already exists.");
          } else {
            let insert = 'INSERT INTO A (industrystandards_id, company_id, A, A1, A11_score, A11_text, A12_score, A12_text, A2, A21_score, A21_text, A22_score, A22_text, A23_score, A23_text, A3, A31_score, A31_text, A32_score, A32_text, A33_score, A33_text, A4, A41_score, A41_text, A42_score, A42_text, A43_score, A43_text) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            db.run(insert, [1, 1, 20, 40, 50, "a1.1 stuff", 70, "a1.2 stuff", 24, 37, "a2.1 stuff", 83, "a2.2 stuff", 99, "a2.3 stuff", 36, 1, "a3.1 stuff", 62, "a3.2 stuff", 44, "a3.3 stuff", 68, 80, "a4.1 stuff", 5, "a4.2 stuff", 32, "a4.3 stuff"]);
            db.run(insert, [1, 2, 20, 40, 50, "a1.1 stuff", 70, "a1.2 stuff", 24, 37, "a2.1 stuff", 83, "a2.2 stuff", 99, "a2.3 stuff", 36, 1, "a3.1 stuff", 62, "a3.2 stuff", 44, "a3.3 stuff", 68, 80, "a4.1 stuff", 5, "a4.2 stuff", 32, "a4.3 stuff"]);
            db.run(insert, [1, 3, 20, 40, 50, "a1.1 stuff", 70, "a1.2 stuff", 24, 37, "a2.1 stuff", 83, "a2.2 stuff", 99, "a2.3 stuff", 36, 1, "a3.1 stuff", 62, "a3.2 stuff", 44, "a3.3 stuff", 68, 80, "a4.1 stuff", 5, "a4.2 stuff", 32, "a4.3 stuff"]);
          }
      });

      db.run('CREATE TABLE B ( \
        B_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
        industrystandards_id INTEGER, \
        company_id INTEGER UNIQUE NOT NULL, \
        B INTEGER NOT NULL, \
        B1 INTEGER NOT NULL, \
        B11_score INTEGER NOT NULL, \
        B11_text NVARCHAR(100) NOT NULL, \
        B12_score INTEGER NOT NULL, \
        B12_text NVARCHAR(100) NOT NULL, \
        B13_score INTEGER NOT NULL, \
        B13_text NVARCHAR(100) NOT NULL, \
        B2 INTEGER NOT NULL, \
        B21_score INTEGER NOT NULL, \
        B21_text NVARCHAR(100) NOT NULL, \
        B22_score INTEGER NOT NULL, \
        B22_text NVARCHAR(100) NOT NULL, \
        B23_score INTEGER NOT NULL, \
        B23_text NVARCHAR(100) NOT NULL, \
        B3 INTEGER NOT NULL, \
        B31_score INTEGER NOT NULL, \
        B31_text NVARCHAR(100) NOT NULL, \
        B32_score INTEGER NOT NULL, \
        B32_text NVARCHAR(100) NOT NULL, \
        B33_score INTEGER NOT NULL, \
        B33_text NVARCHAR(100) NOT NULL, \
        B34_score INTEGER NOT NULL, \
        B34_text NVARCHAR(100) NOT NULL, \
        B4 INTEGER NOT NULL, \
        B41_score INTEGER NOT NULL, \
        B41_text NVARCHAR(100) NOT NULL, \
        B42_score INTEGER NOT NULL, \
        B42_text NVARCHAR(100) NOT NULL, \
        B43_score INTEGER NOT NULL, \
        B43_text NVARCHAR(100) NOT NULL, \
        B44_score INTEGER NOT NULL, \
        B44_text NVARCHAR(100) NOT NULL, \
        B45_score INTEGER NOT NULL, \
        B45_text NVARCHAR(100) NOT NULL \
        \
    )', (err) => {
        if (err) {
          console.log("Worker Exploitation table already exists.");
        } else {
          let insert = 'INSERT INTO B (industrystandards_id, company_id, B, B1, B11_score, B11_text, B12_score, B12_text, B13_score, B13_text, B2, B21_score, B21_text, B22_score, B22_text, B23_score, B23_text, B3, B31_score, B31_text, B32_score, B32_text, B33_score, B33_text, B34_score, B34_text, B4, B41_score, B41_text, B42_score, B42_text, B43_score, B43_text, B44_score, B44_text, B45_score, B45_text) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
          db.run(insert, [1, 1, 20, 40, 50, "b1.1 stuff", 70, "b1.2 stuff", 24, "b1.3 stuff", 37, 63, "b2.1 stuff", 83, "b2.2 stuff", 99, "b2.3 stuff", 36, 1, "b3.1 stuff", 62, "b3.2 stuff", 44, "b3.3 stuff", 68, "b3.4 stuff", 23, 80, "b4.1 stuff", 5, "b4.2 stuff", 32, "b4.3 stuff", 78, "b4.4 stuff", 13, "b4.5 stuff"]);
          db.run(insert, [1, 2, 20, 40, 50, "b1.1 stuff", 70, "b1.2 stuff", 24, "b1.3 stuff", 37, 63, "b2.1 stuff", 83, "b2.2 stuff", 99, "b2.3 stuff", 36, 1, "b3.1 stuff", 62, "b3.2 stuff", 44, "b3.3 stuff", 68, "b3.4 stuff", 23, 80, "b4.1 stuff", 5, "b4.2 stuff", 32, "b4.3 stuff", 78, "b4.4 stuff", 13, "b4.5 stuff"]);
          db.run(insert, [1, 3, 20, 40, 50, "b1.1 stuff", 70, "b1.2 stuff", 24, "b1.3 stuff", 37, 63, "b2.1 stuff", 83, "b2.2 stuff", 99, "b2.3 stuff", 36, 1, "b3.1 stuff", 62, "b3.2 stuff", 44, "b3.3 stuff", 68, "b3.4 stuff", 23, 80, "b4.1 stuff", 5, "b4.2 stuff", 32, "b4.3 stuff", 78, "b4.4 stuff", 13, "b4.5 stuff"]);
        }
    });

    db.run('CREATE TABLE C ( \
      C_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
      industrystandards_id INTEGER, \
      company_id INTEGER UNIQUE NOT NULL, \
      C INTEGER NOT NULL, \
      C1 INTEGER NOT NULL, \
      C11_score INTEGER NOT NULL, \
      C11_text NVARCHAR(100) NOT NULL, \
      C12_score INTEGER NOT NULL, \
      C12_text NVARCHAR(100) NOT NULL, \
      C13_score INTEGER NOT NULL, \
      C13_text NVARCHAR(100) NOT NULL, \
      C14_score INTEGER NOT NULL, \
      C14_text NVARCHAR(100) NOT NULL, \
      C2 INTEGER NOT NULL, \
      C21_score INTEGER NOT NULL, \
      C21_text NVARCHAR(100) NOT NULL, \
      C22_score INTEGER NOT NULL, \
      C22_text NVARCHAR(100) NOT NULL, \
      C23_score INTEGER NOT NULL, \
      C23_text NVARCHAR(100) NOT NULL, \
      C24_score INTEGER NOT NULL, \
      C24_text NVARCHAR(100) NOT NULL, \
      C3 INTEGER NOT NULL, \
      C31_score INTEGER NOT NULL, \
      C31_text NVARCHAR(100) NOT NULL, \
      C32_score INTEGER NOT NULL, \
      C32_text NVARCHAR(100) NOT NULL, \
      C33_score INTEGER NOT NULL, \
      C33_text NVARCHAR(100) NOT NULL, \
      C34_score INTEGER NOT NULL, \
      C34_text NVARCHAR(100) NOT NULL, \
      C4 INTEGER NOT NULL, \
      C41_score INTEGER NOT NULL, \
      C41_text NVARCHAR(100) NOT NULL, \
      C42_score INTEGER NOT NULL, \
      C42_text NVARCHAR(100) NOT NULL, \
      C43_score INTEGER NOT NULL, \
      C43_text NVARCHAR(100) NOT NULL, \
      C44_score INTEGER NOT NULL, \
      C44_text NVARCHAR(100) NOT NULL \
      \
  )', (err) => {
      if (err) {
        console.log("Waste and Pollution table already exists.");
      } else {
        let insert = 'INSERT INTO C (industrystandards_id, company_id, C, C1, C11_score, C11_text, C12_score, C12_text, C13_score, C13_text, C14_score, C14_text, C2, C21_score, C21_text, C22_score, C22_text, C23_score, C23_text, C24_score, C24_text, C3, C31_score, C31_text, C32_score, C32_text, C33_score, C33_text, C34_score, C34_text, C4, C41_score, C41_text, C42_score, C42_text, C43_score, C43_text, C44_score, C44_text) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        db.run(insert, [1, 1, 20, 40, 50, "c1.1 stuff", 70, "c1.2 stuff", 24, "c1.3 stuff", 37, "c1.4 stuff", 89, 63, "c2.1 stuff", 83, "c2.2 stuff", 99, "c2.3 stuff", 36, "c2.4 stuff", 43, 1, "c3.1 stuff", 62, "c3.2 stuff", 44, "c3.3 stuff", 68, "c3.4 stuff", 23, 80, "c4.1 stuff", 5, "c4.2 stuff", 32, "c4.3 stuff", 78, "c4.4 stuff"]);
        db.run(insert, [1, 2, 20, 40, 50, "c1.1 stuff", 70, "c1.2 stuff", 24, "c1.3 stuff", 37, "c1.4 stuff", 89, 63, "c2.1 stuff", 83, "c2.2 stuff", 99, "c2.3 stuff", 36, "c2.4 stuff", 43, 1, "c3.1 stuff", 62, "c3.2 stuff", 44, "c3.3 stuff", 68, "c3.4 stuff", 23, 80, "c4.1 stuff", 5, "c4.2 stuff", 32, "c4.3 stuff", 78, "c4.4 stuff"]);
        db.run(insert, [1, 3, 20, 40, 50, "c1.1 stuff", 70, "c1.2 stuff", 24, "c1.3 stuff", 37, "c1.4 stuff", 89, 63, "c2.1 stuff", 83, "c2.2 stuff", 99, "c2.3 stuff", 36, "c2.4 stuff", 43, 1, "c3.1 stuff", 62, "c3.2 stuff", 44, "c3.3 stuff", 68, "c3.4 stuff", 23, 80, "c4.1 stuff", 5, "c4.2 stuff", 32, "c4.3 stuff", 78, "c4.4 stuff"]);
      }
  });

  db.run('CREATE TABLE D ( \
    D_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
    industrystandards_id INTEGER, \
    company_id INTEGER UNIQUE NOT NULL, \
    D INTEGER NOT NULL, \
    D1 INTEGER NOT NULL, \
    D11_score INTEGER NOT NULL, \
    D11_text NVARCHAR(100) NOT NULL, \
    D12_score INTEGER NOT NULL, \
    D12_text NVARCHAR(100) NOT NULL, \
    D2 INTEGER NOT NULL, \
    D21_score INTEGER NOT NULL, \
    D21_text NVARCHAR(100) NOT NULL, \
    D22_score INTEGER NOT NULL, \
    D22_text NVARCHAR(100) NOT NULL, \
    D23_score INTEGER NOT NULL, \
    D23_text NVARCHAR(100) NOT NULL, \
    D3 INTEGER NOT NULL, \
    D31_score INTEGER NOT NULL, \
    D31_text NVARCHAR(100) NOT NULL, \
    D32_score INTEGER NOT NULL, \
    D32_text NVARCHAR(100) NOT NULL, \
    D33_score INTEGER NOT NULL, \
    D33_text NVARCHAR(100) NOT NULL, \
    D34_score INTEGER NOT NULL, \
    D34_text NVARCHAR(100) NOT NULL, \
    D35_score INTEGER NOT NULL, \
    D35_text NVARCHAR(100) NOT NULL \
    \
)', (err) => {
    if (err) {
      console.log("Sustainable Materials table already exists.");
    } else {
      let insert = 'INSERT INTO D (industrystandards_id, company_id, D, D1, D11_score, D11_text, D12_score, D12_text, D2, D21_score, D21_text, D22_score, D22_text, D23_score, D23_text, D3, D31_score, D31_text, D32_score, D32_text, D33_score, D33_text, D34_score, D34_text, D35_score, D35_text) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      db.run(insert, [1, 1, 20, 40, 50, "d1.1 stuff", 70, "d1.2 stuff", 24, 50, "d2.1 stuff", 83, "d2.2 stuff", 99, "d2.3 stuff", 36, 50, "c3.1 stuff", 62, "c3.2 stuff", 44, "c3.3 stuff", 68, "c3.4 stuff", 78, "c3.5 stuff"]);
      db.run(insert, [1, 2, 20, 40, 50, "d1.1 stuff", 70, "d1.2 stuff", 24, 50, "d2.1 stuff", 83, "d2.2 stuff", 99, "d2.3 stuff", 36, 50, "c3.1 stuff", 62, "c3.2 stuff", 44, "c3.3 stuff", 68, "c3.4 stuff", 78, "c3.5 stuff"]);
      db.run(insert, [1, 3, 20, 40, 50, "d1.1 stuff", 70, "d1.2 stuff", 24, 50, "d2.1 stuff", 83, "d2.2 stuff", 99, "d2.3 stuff", 36, 50, "c3.1 stuff", 62, "c3.2 stuff", 44, "c3.3 stuff", 68, "c3.4 stuff", 78, "c3.5 stuff"]);
    }
});

      db.run('CREATE TABLE industrystandards ( \
        industrystandards_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
        industry NVARCHAR(20), \
        A_total INTEGER, \
        A INTEGER NOT NULL, \
        A1_total INTEGER NOT NULL, \
        A1 INTEGER NOT NULL, \
        A11 INTEGER NOT NULL, \
        A12 INTEGER NOT NULL, \
        A2_total INTEGER NOT NULL, \
        A2 INTEGER NOT NULL, \
        A21 INTEGER NOT NULL, \
        A22 INTEGER NOT NULL, \
        A23 INTEGER NOT NULL, \
        A3_total INTEGER NOT NULL, \
        A3 INTEGER NOT NULL, \
        A31 INTEGER NOT NULL, \
        A32 INTEGER NOT NULL, \
        A33 INTEGER NOT NULL, \
        A4_total INTEGER NOT NULL, \
        A4 INTEGER NOT NULL, \
        A41 INTEGER NOT NULL, \
        A42 INTEGER NOT NULL, \
        A43 INTEGER NOT NULL, \
        B_total INTEGER, \
        B INTEGER NOT NULL, \
        B1_total INTEGER NOT NULL, \
        B1 INTEGER NOT NULL, \
        B11 INTEGER NOT NULL, \
        B12 INTEGER NOT NULL, \
        B13 INTEGER NOT NULL, \
        B2_total INTEGER NOT NULL, \
        B2 INTEGER NOT NULL, \
        B21 INTEGER NOT NULL, \
        B22 INTEGER NOT NULL, \
        B23 INTEGER NOT NULL, \
        B3_total INTEGER NOT NULL, \
        B3 INTEGER NOT NULL, \
        B31 INTEGER NOT NULL, \
        B32 INTEGER NOT NULL, \
        B33 INTEGER NOT NULL, \
        B34 INTEGER NOT NULL, \
        B4_total INTEGER NOT NULL, \
        B4 INTEGER NOT NULL, \
        B41 INTEGER NOT NULL, \
        B42 INTEGER NOT NULL, \
        B43 INTEGER NOT NULL, \
        B44 INTEGER NOT NULL, \
        B45 INTEGER NOT NULL, \
        C_total INTEGER, \
        C INTEGER NOT NULL, \
        C1_total INTEGER NOT NULL, \
        C1 INTEGER NOT NULL, \
        C11 INTEGER NOT NULL, \
        C12 INTEGER NOT NULL, \
        C13 INTEGER NOT NULL, \
        C14 INTEGER NOT NULL, \
        C2_total INTEGER NOT NULL, \
        C2 INTEGER NOT NULL, \
        C21 INTEGER NOT NULL, \
        C22 INTEGER NOT NULL, \
        C23 INTEGER NOT NULL, \
        C24 INTEGER NOT NULL, \
        C3_total INTEGER NOT NULL, \
        C3 INTEGER NOT NULL, \
        C31 INTEGER NOT NULL, \
        C32 INTEGER NOT NULL, \
        C33 INTEGER NOT NULL, \
        C34 INTEGER NOT NULL, \
        C4_total INTEGER NOT NULL, \
        C4 INTEGER NOT NULL, \
        C41 INTEGER NOT NULL, \
        C42 INTEGER NOT NULL, \
        C43 INTEGER NOT NULL, \
        C44 INTEGER NOT NULL, \
        D_total INTEGER, \
        D INTEGER NOT NULL, \
        D1_total INTEGER NOT NULL, \
        D1 INTEGER NOT NULL, \
        D11 INTEGER NOT NULL, \
        D12 INTEGER NOT NULL, \
        D2_total INTEGER NOT NULL, \
        D2 INTEGER NOT NULL, \
        D21 INTEGER NOT NULL, \
        D22 INTEGER NOT NULL, \
        D23 INTEGER NOT NULL, \
        D3_total INTEGER NOT NULL, \
        D3 INTEGER NOT NULL, \
        D31 INTEGER NOT NULL, \
        D32 INTEGER NOT NULL, \
        D33 INTEGER NOT NULL, \
        D34 INTEGER NOT NULL, \
        D35 INTEGER NOT NULL \
        \
    )', (err) => {
        if (err) {
          console.log("Industry table already exists.");
        } else {
          let insert = 'INSERT INTO industrystandards (industrystandards_id, A, A1, A11, A12, A2, A21, A22, A23, A3, A31, A32, A33, A4, A41, A42, A43, B, B1, B11, B12, B13, B2, B21, B22, B23, B3, B31, B32, B33, B34, B4, B41, B42, B43, B44, B45, C, C1, C11, C12, C13, C14, C2, C21, C22, C23, C24, C3, C31, C32, C33, C34, C4, C41, C42, C43, C44, D, D1, D11, D12, D2, D21, D22, D23, D3, D31, D32, D33, D34, D35) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
          db.run(insert, ["Shoes", 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
        }
    });

    db.run('CREATE TABLE Citations ( \
      citations_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
      relational_id INTEGER, \
      author NVARCHAR(20), \
      title NVARCHAR(20), \
      publishing_group NVARCHAR(20), \
      date NVARCHAR(20), \
      pages NVARCHAR(20) \
      \
  )', (err) => {
      if (err) {
        console.log("Citations table already exists.");
      } else {
        let insert = 'INSERT INTO Citations (relational_id, type, citation) VALUES (?,?,?)';
        db.run(insert, [1, "A1.1", "from google"]);
        db.run(insert, [1, "B3.3", "from facebook"]);
        db.run(insert, [1, "Facts", "yay so reputable"]);
        db.run(insert, [1, "News", "wow so cool"]);
      }
  });

  db.run('CREATE TABLE Facts ( \
    facts_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
    company_id INTEGER, \
    summary NVARCHAR(20), \
    heading NVARCHAR(20) \
    \
)', (err) => {
    if (err) {
      console.log("Facts table already exists.");
    } else {
      let insert = 'INSERT INTO Facts (company_id, summary, heading) VALUES (?,?,?)';
      db.run(insert, [1, "cool fact", "extensive description wow"]);
      db.run(insert, [1, "B3.3", "from facebook"]);
      db.run(insert, [2, "Facts", "yay so reputable"]);
      db.run(insert, [2, "News", "wow so cool"]);
    }
});

    }
});

app.get('/', (req, res) => {
  res.status(200).send('Monest Home Page!')
})

// This would just be the page for singular company
app.post('/company/:companyname', function(req,res,next){
  var companyname = req.params.companyname;

  db.get("SELECT * FROM company WHERE name = ?", [companyname], (err, row) => {
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

app.post('/companydetailsA', (req, res) => {
  const companyname = req.query['0'];
  db.all("SELECT * FROM A WHERE company_id IN (SELECT company_id FROM company WHERE name = ?)", [companyname], (err, rows) => {
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

app.post('/companydetailsB', (req, res) => {
  const companyname = req.query['0'];
  db.all("SELECT * FROM B WHERE company_id IN (SELECT company_id FROM company WHERE name = ?)", [companyname], (err, rows) => {
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

app.post('/companydetailsC', (req, res) => {
  const companyname = req.query['0'];
  db.all("SELECT * FROM C WHERE company_id IN (SELECT company_id FROM company WHERE name = ?)", [companyname], (err, rows) => {
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

app.post('/companydetailsD', (req, res) => {
  const companyname = req.query['0'];
  db.all("SELECT * FROM D WHERE company_id IN (SELECT company_id FROM company WHERE name = ?)", [companyname], (err, rows) => {
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
  db.all("SELECT * FROM industrystandards WHERE industry_id = ?", [industryID], (err, rows) => {
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