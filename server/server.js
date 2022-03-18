const express = require('express')
const app = express()
const port = process.env.PORT || 8000
app.set('port', port)
const sqlite3 = require('sqlite3');
var cors = require("cors");
app.use(cors());

// const path = require('path');

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READONLY, (err) => {
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
          D INTEGER NOT NULL, \
          sim_comp_1 INTEGER NOT NULL, \
          sim_comp_2 INTEGER NOT NULL, \
          sim_comp_3 INTEGER NOT NULL, \
          sim_comp_4 INTEGER NOT NULL \
          \
      )', (err) => {
            console.log(err);
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
          A12_sr NVARCHAR(100) NOT NULL, \
          A12_lr NVARCHAR(100) NOT NULL, \
          A2 INTEGER NOT NULL, \
          A21_score INTEGER NOT NULL, \
          A21_sr NVARCHAR(100) NOT NULL, \
          A21_lr NVARCHAR(100) NOT NULL, \
          A22_score INTEGER NOT NULL, \
          A22_sr NVARCHAR(100) NOT NULL, \
          A22_lr NVARCHAR(100) NOT NULL, \
          A23_score INTEGER NOT NULL, \
          A23_sr NVARCHAR(100) NOT NULL, \
          A23_lr NVARCHAR(100) NOT NULL, \
          A3 INTEGER NOT NULL, \
          A31_score INTEGER NOT NULL, \
          A31_sr NVARCHAR(100) NOT NULL, \
          A31_lr NVARCHAR(100) NOT NULL, \
          A32_score INTEGER NOT NULL, \
          A32_sr NVARCHAR(100) NOT NULL, \
          A32_lr NVARCHAR(100) NOT NULL, \
          A33_score INTEGER NOT NULL, \
          A33_sr NVARCHAR(100) NOT NULL, \
          A33_lr NVARCHAR(100) NOT NULL, \
          A4 INTEGER NOT NULL, \
          A41_score INTEGER NOT NULL, \
          A41_sr NVARCHAR(100) NOT NULL, \
          A41_lr NVARCHAR(100) NOT NULL, \
          A42_score INTEGER NOT NULL, \
          A42_sr NVARCHAR(100) NOT NULL, \
          A42_lr NVARCHAR(100) NOT NULL, \
          A43_score INTEGER NOT NULL, \
          A43_sr NVARCHAR(100) NOT NULL, \
          A43_lr NVARCHAR(100) NOT NULL \
          \
      )', (err) => {
          console.log(err);
      });

      db.run('CREATE TABLE B ( \
        B_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
        industrystandards_id INTEGER, \
        company_id INTEGER UNIQUE NOT NULL, \
        B INTEGER NOT NULL, \
        B1 INTEGER NOT NULL, \
        B11_score INTEGER NOT NULL, \
        B11_sr NVARCHAR(100) NOT NULL, \
        B11_lr NVARCHAR(100) NOT NULL, \
        B12_score INTEGER NOT NULL, \
        B12_sr NVARCHAR(100) NOT NULL, \
        B12_lr NVARCHAR(100) NOT NULL, \
        B13_score INTEGER NOT NULL, \
        B13_sr NVARCHAR(100) NOT NULL, \
        B13_lr NVARCHAR(100) NOT NULL, \
        B2 INTEGER NOT NULL, \
        B21_score INTEGER NOT NULL, \
        B21_sr NVARCHAR(100) NOT NULL, \
        B21_lr NVARCHAR(100) NOT NULL, \
        B22_score INTEGER NOT NULL, \
        B22_sr NVARCHAR(100) NOT NULL, \
        B22_lr NVARCHAR(100) NOT NULL, \
        B23_score INTEGER NOT NULL, \
        B23_sr NVARCHAR(100) NOT NULL, \
        B23_lr NVARCHAR(100) NOT NULL, \
        B3 INTEGER NOT NULL, \
        B31_score INTEGER NOT NULL, \
        B31_sr NVARCHAR(100) NOT NULL, \
        B31_lr NVARCHAR(100) NOT NULL, \
        B32_score INTEGER NOT NULL, \
        B32_sr NVARCHAR(100) NOT NULL, \
        B32_lr NVARCHAR(100) NOT NULL, \
        B33_score INTEGER NOT NULL, \
        B33_sr NVARCHAR(100) NOT NULL, \
        B33_lr NVARCHAR(100) NOT NULL, \
        B34_score INTEGER NOT NULL, \
        B34_sr NVARCHAR(100) NOT NULL, \
        B34_lr NVARCHAR(100) NOT NULL, \
        B4 INTEGER NOT NULL, \
        B41_score INTEGER NOT NULL, \
        B41_sr NVARCHAR(100) NOT NULL, \
        B41_lr NVARCHAR(100) NOT NULL, \
        B42_score INTEGER NOT NULL, \
        B42_sr NVARCHAR(100) NOT NULL, \
        B42_lr NVARCHAR(100) NOT NULL, \
        B43_score INTEGER NOT NULL, \
        B43_sr NVARCHAR(100) NOT NULL, \
        B43_lr NVARCHAR(100) NOT NULL, \
        B44_score INTEGER NOT NULL, \
        B44_sr NVARCHAR(100) NOT NULL, \
        B44_lr NVARCHAR(100) NOT NULL, \
        B45_score INTEGER NOT NULL, \
        B45_sr NVARCHAR(100) NOT NULL, \
        B45_lr NVARCHAR(100) NOT NULL \
        \
    )', (err) => {
        console.log(err);
    });

    db.run('CREATE TABLE C ( \
      C_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
      industrystandards_id INTEGER, \
      company_id INTEGER UNIQUE NOT NULL, \
      C INTEGER NOT NULL, \
      C1 INTEGER NOT NULL, \
      C11_score INTEGER NOT NULL, \
      C11_sr NVARCHAR(100) NOT NULL, \
      C11_lr NVARCHAR(100) NOT NULL, \
      C12_score INTEGER NOT NULL, \
      C12_sr NVARCHAR(100) NOT NULL, \
      C12_lr NVARCHAR(100) NOT NULL, \
      C13_score INTEGER NOT NULL, \
      C13_sr NVARCHAR(100) NOT NULL, \
      C13_lr NVARCHAR(100) NOT NULL, \
      C14_score INTEGER NOT NULL, \
      C14_sr NVARCHAR(100) NOT NULL, \
      C14_lr NVARCHAR(100) NOT NULL, \
      C2 INTEGER NOT NULL, \
      C21_score INTEGER NOT NULL, \
      C21_sr NVARCHAR(100) NOT NULL, \
      C21_lr NVARCHAR(100) NOT NULL, \
      C22_score INTEGER NOT NULL, \
      C22_sr NVARCHAR(100) NOT NULL, \
      C22_lr NVARCHAR(100) NOT NULL, \
      C23_score INTEGER NOT NULL, \
      C23_sr NVARCHAR(100) NOT NULL, \
      C23_lr NVARCHAR(100) NOT NULL, \
      C24_score INTEGER NOT NULL, \
      C24_sr NVARCHAR(100) NOT NULL, \
      C24_lr NVARCHAR(100) NOT NULL, \
      C3 INTEGER NOT NULL, \
      C31_score INTEGER NOT NULL, \
      C31_sr NVARCHAR(100) NOT NULL, \
      C31_lr NVARCHAR(100) NOT NULL, \
      C32_score INTEGER NOT NULL, \
      C32_sr NVARCHAR(100) NOT NULL, \
      C32_lr NVARCHAR(100) NOT NULL, \
      C33_score INTEGER NOT NULL, \
      C33_sr NVARCHAR(100) NOT NULL, \
      C33_lr NVARCHAR(100) NOT NULL, \
      C34_score INTEGER NOT NULL, \
      C34_sr NVARCHAR(100) NOT NULL, \
      C34_lr NVARCHAR(100) NOT NULL, \
      C4 INTEGER NOT NULL, \
      C41_score INTEGER NOT NULL, \
      C41_sr NVARCHAR(100) NOT NULL, \
      C41_lr NVARCHAR(100) NOT NULL, \
      C42_score INTEGER NOT NULL, \
      C42_sr NVARCHAR(100) NOT NULL, \
      C42_lr NVARCHAR(100) NOT NULL, \
      C43_score INTEGER NOT NULL, \
      C43_sr NVARCHAR(100) NOT NULL, \
      C43_lr NVARCHAR(100) NOT NULL, \
      C44_score INTEGER NOT NULL, \
      C44_sr NVARCHAR(100) NOT NULL, \
      C44_lr NVARCHAR(100) NOT NULL \
      \
  )', (err) => {
      console.log(err);
  });

  db.run('CREATE TABLE D ( \
    D_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
    industrystandards_id INTEGER, \
    company_id INTEGER UNIQUE NOT NULL, \
    D INTEGER NOT NULL, \
    D1 INTEGER NOT NULL, \
    D11_score INTEGER NOT NULL, \
    D11_sr NVARCHAR(100) NOT NULL, \
    D11_lr NVARCHAR(100) NOT NULL, \
    D12_score INTEGER NOT NULL, \
    D12_sr NVARCHAR(100) NOT NULL, \
    D12_lr NVARCHAR(100) NOT NULL, \
    D2 INTEGER NOT NULL, \
    D21_score INTEGER NOT NULL, \
    D21_sr NVARCHAR(100) NOT NULL, \
    D21_lr NVARCHAR(100) NOT NULL, \
    D22_score INTEGER NOT NULL, \
    D22_sr NVARCHAR(100) NOT NULL, \
    D22_lr NVARCHAR(100) NOT NULL, \
    D23_score INTEGER NOT NULL, \
    D23_sr NVARCHAR(100) NOT NULL, \
    D23_lr NVARCHAR(100) NOT NULL, \
    D3 INTEGER NOT NULL, \
    D31_score INTEGER NOT NULL, \
    D31_sr NVARCHAR(100) NOT NULL, \
    D31_lr NVARCHAR(100) NOT NULL, \
    D32_score INTEGER NOT NULL, \
    D32_sr NVARCHAR(100) NOT NULL, \
    D32_lr NVARCHAR(100) NOT NULL, \
    D33_score INTEGER NOT NULL, \
    D33_sr NVARCHAR(100) NOT NULL, \
    D33_lr NVARCHAR(100) NOT NULL, \
    D34_score INTEGER NOT NULL, \
    D34_sr NVARCHAR(100) NOT NULL, \
    D34_lr NVARCHAR(100) NOT NULL, \
    D35_score INTEGER NOT NULL, \
    D35_sr NVARCHAR(100) NOT NULL, \
    D35_lr NVARCHAR(100) NOT NULL \
    \
)', (err) => {
    console.log(err);
});

      db.run('CREATE TABLE industrystandards ( \
        industrystandards_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
        industry NVARCHAR(20), \
        A_low INTEGER NOT NULL, \
        A_high INTEGER NOT NULL, \
        A1_total INTEGER NOT NULL, \
        A1_low INTEGER NOT NULL, \
        A1_high INTEGER NOT NULL, \
        A11_low INTEGER NOT NULL, \
        A11_high INTEGER NOT NULL, \
        A12_low INTEGER NOT NULL, \
        A12_high INTEGER NOT NULL, \
        A2_total INTEGER NOT NULL, \
        A2_low INTEGER NOT NULL, \
        A2_high INTEGER NOT NULL, \
        A21_low INTEGER NOT NULL, \
        A21_high INTEGER NOT NULL, \
        A22_low INTEGER NOT NULL, \
        A22_high INTEGER NOT NULL, \
        A23_low INTEGER NOT NULL, \
        A23_high INTEGER NOT NULL, \
        A3_total INTEGER NOT NULL, \
        A3_low INTEGER NOT NULL, \
        A3_high INTEGER NOT NULL, \
        A31_low INTEGER NOT NULL, \
        A31_high INTEGER NOT NULL, \
        A32_low INTEGER NOT NULL, \
        A32_high INTEGER NOT NULL, \
        A33_low INTEGER NOT NULL, \
        A33_high INTEGER NOT NULL, \
        A4_total INTEGER NOT NULL, \
        A4_low INTEGER NOT NULL, \
        A4_high INTEGER NOT NULL, \
        A41_low INTEGER NOT NULL, \
        A41_high INTEGER NOT NULL, \
        A42_low INTEGER NOT NULL, \
        A42_high INTEGER NOT NULL, \
        A43_low INTEGER NOT NULL, \
        A43_high INTEGER NOT NULL, \
        B_low INTEGER NOT NULL, \
        B_high INTEGER NOT NULL, \
        B1_total INTEGER NOT NULL, \
        B1_low INTEGER NOT NULL, \
        B1_high INTEGER NOT NULL, \
        B11_low INTEGER NOT NULL, \
        B11_high INTEGER NOT NULL, \
        B12_low INTEGER NOT NULL, \
        B12_high INTEGER NOT NULL, \
        B13_low INTEGER NOT NULL, \
        B13_high INTEGER NOT NULL, \
        B2_total INTEGER NOT NULL, \
        B2_low INTEGER NOT NULL, \
        B2_high INTEGER NOT NULL, \
        B21_low INTEGER NOT NULL, \
        B21_high INTEGER NOT NULL, \
        B22_low INTEGER NOT NULL, \
        B22_high INTEGER NOT NULL, \
        B23_low INTEGER NOT NULL, \
        B23_high INTEGER NOT NULL, \
        B3_total INTEGER NOT NULL, \
        B3_low INTEGER NOT NULL, \
        B3_high INTEGER NOT NULL, \
        B31_low INTEGER NOT NULL, \
        B31_high INTEGER NOT NULL, \
        B32_low INTEGER NOT NULL, \
        B32_high INTEGER NOT NULL, \
        B33_low INTEGER NOT NULL, \
        B33_high INTEGER NOT NULL, \
        B34_low INTEGER NOT NULL, \
        B34_high INTEGER NOT NULL, \
        B4_total INTEGER NOT NULL, \
        B4_low INTEGER NOT NULL, \
        B4_high INTEGER NOT NULL, \
        B41_low INTEGER NOT NULL, \
        B41_high INTEGER NOT NULL, \
        B42_low INTEGER NOT NULL, \
        B42_high INTEGER NOT NULL, \
        B43_low INTEGER NOT NULL, \
        B43_high INTEGER NOT NULL, \
        B44_low INTEGER NOT NULL, \
        B44_high INTEGER NOT NULL, \
        B45_low INTEGER NOT NULL, \
        B45_high INTEGER NOT NULL, \
        C_low INTEGER NOT NULL, \
        C_high INTEGER NOT NULL, \
        C1_total INTEGER NOT NULL, \
        C1_low INTEGER NOT NULL, \
        C1_high INTEGER NOT NULL, \
        C11_low INTEGER NOT NULL, \
        C11_high INTEGER NOT NULL, \
        C12_low INTEGER NOT NULL, \
        C12_high INTEGER NOT NULL, \
        C13_low INTEGER NOT NULL, \
        C13_high INTEGER NOT NULL, \
        C14_low INTEGER NOT NULL, \
        C14_high INTEGER NOT NULL, \
        C2_total INTEGER NOT NULL, \
        C2_low INTEGER NOT NULL, \
        C2_high INTEGER NOT NULL, \
        C21_low INTEGER NOT NULL, \
        C21_high INTEGER NOT NULL, \
        C22_low INTEGER NOT NULL, \
        C22_high INTEGER NOT NULL, \
        C23_low INTEGER NOT NULL, \
        C23_high INTEGER NOT NULL, \
        C24_low INTEGER NOT NULL, \
        C24_high INTEGER NOT NULL, \
        C3_total INTEGER NOT NULL, \
        C3_low INTEGER NOT NULL, \
        C3_high INTEGER NOT NULL, \
        C31_low INTEGER NOT NULL, \
        C31_high INTEGER NOT NULL, \
        C32_low INTEGER NOT NULL, \
        C32_high INTEGER NOT NULL, \
        C33_low INTEGER NOT NULL, \
        C33_high INTEGER NOT NULL, \
        C34_low INTEGER NOT NULL, \
        C34_high INTEGER NOT NULL, \
        C4_total INTEGER NOT NULL, \
        C4_low INTEGER NOT NULL, \
        C4_high INTEGER NOT NULL, \
        C41_low INTEGER NOT NULL, \
        C41_high INTEGER NOT NULL, \
        C42_low INTEGER NOT NULL, \
        C42_high INTEGER NOT NULL, \
        C43_low INTEGER NOT NULL, \
        C43_high INTEGER NOT NULL, \
        C44_low INTEGER NOT NULL, \
        C44_high INTEGER NOT NULL, \
        D_low INTEGER NOT NULL, \
        D_high INTEGER NOT NULL, \
        D1_total INTEGER NOT NULL, \
        D1_low INTEGER NOT NULL, \
        D1_high INTEGER NOT NULL, \
        D11_low INTEGER NOT NULL, \
        D11_high INTEGER NOT NULL, \
        D12_low INTEGER NOT NULL, \
        D12_high INTEGER NOT NULL, \
        D2_total INTEGER NOT NULL, \
        D2_low INTEGER NOT NULL, \
        D2_high INTEGER NOT NULL, \
        D21_low INTEGER NOT NULL, \
        D21_high INTEGER NOT NULL, \
        D22_low INTEGER NOT NULL, \
        D22_high INTEGER NOT NULL, \
        D23_low INTEGER NOT NULL, \
        D23_high INTEGER NOT NULL, \
        D3_total INTEGER NOT NULL, \
        D3_low INTEGER NOT NULL, \
        D31_low INTEGER NOT NULL, \
        D31_high INTEGER NOT NULL, \
        D32_low INTEGER NOT NULL, \
        D32_high INTEGER NOT NULL, \
        D33_low INTEGER NOT NULL, \
        D33_high INTEGER NOT NULL, \
        D34_low INTEGER NOT NULL, \
        D34_high INTEGER NOT NULL, \
        D35_low INTEGER NOT NULL, \
        D35_high INTEGER NOT NULL \
        \
    )', (err) => {
        console.log(err);
    });

    db.run('CREATE TABLE Citations ( \
      citations_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
      relational_id INTEGER, \
      type NVARCHAR(20), \
      author NVARCHAR(20), \
      title NVARCHAR(20), \
      publishing_group NVARCHAR(20), \
      date NVARCHAR(20), \
      pages NVARCHAR(20) \
      \
  )', (err) => {
      console.log(err);
  });

  db.run('CREATE TABLE Facts ( \
    facts_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
    company_id INTEGER, \
    summary NVARCHAR(20), \
    heading NVARCHAR(20) \
    \
)', (err) => {
    console.log(err);
});

    }
});

const path = require('path');

// app.get('*', function(req, res) {
//   res.status(404).send("Error Page")
// })

// app.get('/', (req, res) => {
//   res.status(200).send('Monest Home Page!')
// })

app.post('/citationsLong', function(req, res, next) {
  var companyName = req.query['0'];
  db.all("SELECT * FROM Citations WHERE Type!='F' AND Type!='N' AND RelationalID IN (SELECT ID FROM A WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)) AND RelationalID IN (SELECT ID FROM B WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)) AND RelationalID IN (SELECT ID FROM C WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)) AND RelationalID IN (SELECT ID FROM D WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?))", [companyName, companyName, companyName, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      res.status(200).json(row);
    }
    next();
  })
})

app.post('/citations', function(req, res, next) {
  console.log("req query");
  console.log(req.query);
  var companyName = req.query['0'];
  var ID = req.query['1'];
  var type = req.query['2'];
  db.all("SELECT * FROM Citations WHERE Type=? AND RelationalID=? AND RelationalID IN (SELECT ID FROM News WHERE CompanyID IN (SELECT ID FROM companies WHERE Name = ?))", [type, ID, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      res.status(200).json(row);
    }
    next();
  })
})

app.post('/citationsFacts', function(req, res, next) {
  var companyName = req.query['0'];
  var type = req.query['2'];
  var ID = req.query['1'];
  console.log(ID);
  console.log("hi");
  db.all("SELECT * FROM Citations WHERE Type=? AND RelationalID = ? AND RelationalID IN (SELECT ID FROM Facts WHERE CompanyID IN (SELECT ID FROM companies WHERE Name = ?))", [type, ID, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      console.log("work?");
      console.log(row);
      res.status(200).json(row);
    }
    next();
  })
})

app.post('/similarCompany1', function(req,res,next) {
  var companyName = req.query['0'];
  // db.all("SELECT A_scores.A, B_scores.B FROM A_scores, B_scores WHERE ((A_Scores.CompanyID IN (SELECT ID FROM companies WHERE name = ?) AND)", [companyName], (err, row) => {
  db.all("SELECT A.Ascore, B.Bscore, C.Cscore, D.Dscore FROM A, B, C, D WHERE A.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany1 FROM companies WHERE Name = ?)) AND  B.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany1 FROM companies WHERE Name = ?)) AND C.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany1 FROM companies WHERE Name = ?)) AND D.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany1 FROM companies WHERE Name = ?))", [companyName, companyName, companyName, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      res.status(200).json(row);
    }
    next();
  })
})

app.post('/similarCompany2', function(req,res,next) {
  var companyName = req.query['0'];
  // db.all("SELECT A_scores.A, B_scores.B FROM A_scores, B_scores WHERE ((A_Scores.CompanyID IN (SELECT ID FROM companies WHERE name = ?) AND)", [companyName], (err, row) => {
  db.all("SELECT A.Ascore, B.Bscore, C.Cscore, D.Dscore FROM A, B, C, D WHERE A.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany2 FROM companies WHERE Name = ?)) AND  B.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany2 FROM companies WHERE Name = ?)) AND C.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany2 FROM companies WHERE Name = ?)) AND D.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany2 FROM companies WHERE Name = ?))", [companyName, companyName, companyName, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      // console.log(row);
      // console.log("this works");
      res.status(200).json(row);
    }
    next();
  })
})

app.post('/similarCompany3', function(req,res,next) {
  var companyName = req.query['0'];
  // db.all("SELECT A_scores.A, B_scores.B FROM A_scores, B_scores WHERE ((A_Scores.CompanyID IN (SELECT ID FROM companies WHERE name = ?) AND)", [companyName], (err, row) => {
  db.all("SELECT A.Ascore, B.Bscore, C.Cscore, D.Dscore FROM A, B, C, D WHERE A.CompanyID IN (SELECT ID FROM Companies WHERE Name IN (SELECT SimilarCompany3 FROM Companies WHERE Name = ?)) AND B.CompanyID IN (SELECT ID FROM Companies WHERE Name IN (SELECT SimilarCompany3 FROM Companies WHERE Name = ?)) AND C.CompanyID IN (SELECT ID FROM Companies WHERE Name IN (SELECT SimilarCompany3 FROM Companies WHERE Name = ?)) AND D.CompanyID IN (SELECT ID FROM Companies WHERE Name IN (SELECT SimilarCompany3 FROM Companies WHERE Name = ?))", [companyName, companyName, companyName, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      console.log("simcomp");
      console.log(row);
      res.status(200).json(row);
    }
    next();
  })
})

app.post('/similarCompany4', function(req,res,next) {
  var companyName = req.query['0'];
  // db.all("SELECT A_scores.A, B_scores.B FROM A_scores, B_scores WHERE ((A_Scores.CompanyID IN (SELECT ID FROM companies WHERE name = ?) AND)", [companyName], (err, row) => {
  db.all("SELECT A.Ascore, B.Bscore, C.Cscore, D.Dscore FROM A, B, C, D WHERE A.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany4 FROM companies WHERE Name = ?)) AND  B.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany4 FROM companies WHERE Name = ?)) AND C.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany4 FROM companies WHERE Name = ?)) AND D.CompanyID IN (SELECT  ID FROM companies WHERE Name IN (SELECT SimilarCompany4 FROM companies WHERE Name = ?))", [companyName, companyName, companyName, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      res.status(200).json(row);
    }
    next();
  })
})

app.post('/companyscores', function(req,res,next) {
  var companyName = req.query['0'];
  db.all("SELECT * FROM A, B, C, D WHERE A.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?) AND B.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?) AND C.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?) AND D.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)", [companyName, companyName, companyName, companyName], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(row){
      res.status(200).json(row);
    }
    next();
  })
})
// 

// This would just be the page for singular company
app.post('/companyname', function(req,res,next){
  var companyName = req.query['0'];
  db.all("SELECT * FROM Companies WHERE Name = ?", [companyName], (err, row) => {
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

app.post('/somecompanyinfo', function(req,res,next){
  var companyName = req.query['0'];
  db.all("SELECT Logo, Subsidiary, TotalScore FROM Companies WHERE Name = ?", [companyName], (err, row) => {
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

app.post('/facts', function(req,res,next){
  var companyName = req.query['0'];
  db.all("SELECT * FROM Facts WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ? )", [companyName], (err, row) => {
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

app.post('/news', function(req,res,next){
  var companyName = req.query['0'];
  db.all("SELECT * FROM News WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ? )", [companyName], (err, row) => {
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

app.post('/companydetailsA_specific', function(req,res,next){
  var companyName = req.query['0'];
  db.all("SELECT Ascore FROM A WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)", [companyName], (err, row) => {
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
// app.get('/', (req, res) => {
//   res.status(200).send('Monest Home Page!')
// })

app.post('/companydetailsA', (req, res) => {
  const companyName = req.query['0'];
  db.all("SELECT * FROM A WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)", [companyName], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
    }
  });
})

app.post('/companydetailsB', (req, res) => {
  const companyName = req.query['0'];
  db.all("SELECT * FROM B WHERE CompanyID IN (SELECT ID FROM Companies WHERE name = ?)", [companyName], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
    }
  });
})

app.post('/companydetailsC', (req, res) => {
  const companyName = req.query['0'];
  db.all("SELECT * FROM C WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)", [companyName], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
    }
  });
})

app.post('/companydetailsD', (req, res) => {
  const companyName = req.query['0'];
  db.all("SELECT * FROM D WHERE CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)", [companyName], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
    }
  });
})

app.get('/scoredenominator', (req, res) => {
  db.all("SELECT A1total, `A1.1total`,  `A1.2total`, A2total, `A2.1total`, `A2.2total`, `A2.3total`, A3total, `A3.1total`, `A3.2total`, `A3.3total`, A4total, `A4.1total`, `A4.2total`, `A4.3total`, B1total, `B1.1total`, `B1.2total`, `B1.3total`, B2total, `B2.1total`, `B2.2total`,  `B2.3total`, B3total, `B3.1total`, `B3.2total`, `B3.3total`, `B3.4total`, B4total, `B4.1total`, `B4.2total`, `B4.3total`,  `B4.4total` C1total, `C1.1total`, `C1.2total`, `C1.3total`, `C1.4total` C2total, `C2.1total`, `C2.2total`, `C2.3total`, `C2.4total`, C3total, `C3.1total`, `C3.2total`, `C3.3total`, `C3.4total(integer`, C4total, `C4.1total`,  `C4.2total`, `C4.3total`, `C4.4total`, D1total, `D1.1total`, `D1.2total`, D2total, `D2.1total`, `D2.2total`, `D2.3total`, D3total, `D3.1total`, `D3.2total`, `D3.3total`, `D3.4total`, `D3.5total` FROM IndustryStandards", (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      res.status(200).json({ rows });
    }
  })
})

app.get('/allcompanies', (req, res) => {
  console.log("first all comp success");
  db.all("SELECT Name FROM Companies", [], (err, rows) => {
    if (err) {
      console.log("oopsie error");
      res.status(400).json({ "error": err.message });
      return;
    }
    if(rows){
      console.log("second all comp success");
      res.status(200).json({ rows });
    }
  });

});

app.post('/brandsbycategory', (req, res) => {
  const category = req.query['0'];
  db.all("SELECT Name FROM Companies WHERE Category = ?", [category], (err, rows) => {
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
  db.all("SELECT * FROM industrystandards WHERE ID = ?", [industryID], (err, rows) => {
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

  db.get("SELECT name FROM companies WHERE name = ?", [companyName], (err, row) => {
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




/*
Convert ranking preferences into weight for ranking
 */
function ranking_weight(preference) {
  let weight = 1;
  switch (preference) {
    case 'low':
      weight = 0.5;
      break;
    case 'medium':
      weight = 1;
      break;
    case 'high':
      weight = 1.5;
  }

  return weight;
}

/*
rank companies according to their scores
 */
function rank_companies(companies, company_scores){
  companies.sort( function(a, b) {
    return  company_scores.get(b) - company_scores.get(a);
  })
}


/*
APIs
Get Industry Ranking
URI: /api/v1/ranking
Parameters:
  brand: brand name
  ranking preference: (low,  medium, high)
    di: Diversity & Inclusion,
    we: Worker Exploitation,
    wp:  Waster & Pollution,
    es: Ethical Sourcing
Return:
  Industry Ranking
 */
app.get('/api/v1/ranking', function (req, res){
  let brand =  req.query['brand'];
  let di = req.query['di'] || 'medium';
  let we = req.query['we'] || 'medium';
  let wp = req.query['wp'] || 'medium';
  let es = req.query['es'] || 'medium';
  console.log("/api/v1/ranking");
  console.log(req.query);
  let di_weight = ranking_weight(di);
  let we_weight = ranking_weight(we);
  let wp_weight = ranking_weight(wp);
  let es_weight = ranking_weight(es);

  try{
    let companies_array =  [];
    let company_scores = new Map();
    db.all("SELECT name from companies where category = (SELECT category from companies where name = ?)", [brand], (err, companies) => {
      if (err) {
        console.log(err)
        res.status(400).json({ "error": err.message });
      }
      if(companies.length) {
        let item_processed = 0;

        companies.forEach( (value) => {
          let company = value['Name'];
          companies_array.push(company);
          db.all("SELECT Ascore,Bscore,Cscore,Dscore FROM A, B, C, D WHERE A.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?) AND B.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?) AND C.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?) AND D.CompanyID IN (SELECT ID FROM Companies WHERE Name = ?)", [company, company, company, company], (err, scores) => {
            if (err) {
              console.log(err)
              res.status(400).json({ "error": err.message });
            }
            if(scores){
              let weighted_score = scores[0].Ascore * di_weight + scores[0].Bscore * we_weight + scores[0].Cscore * wp_weight + scores[0].Dscore * es_weight;
              company_scores.set(company, weighted_score);
              item_processed++;
              if(item_processed === companies.length){
                console.log(company_scores);
                rank_companies(companies_array, company_scores);
                console.log(companies_array);
                res.status(200).json(companies_array);
              }
            }
          })
        })
      }
      else{
        console.log('Company does not exist');
        res.status(404).json({ "error": 'Company does not exist' });
      }
    })
  }
  catch (err){
    res.status(400).json({ "error": err.message });
  }
})

/*
for frond-end test purpose
 */
app.get('/api/v1/pa/summary', function(req, res) {
  let company =  req.query['company'];
  console.log(company);
  res.status(200).json({
    "rep" : 23750,
    "dem": 1744
  })
})

/*
for frond-end test purpose
 */
app.get('/api/v1/pa/detailed', function(req, res){
  let company =  req.query['company'];
  console.log(company);
  res.status(200).json({
    "data": [{
      "year": 2016,
      "rep": 23750,
      "dem": 1744,
      "indi": 1
    },
      {
        "year": 2018,
        "rep": 63227,
        "dem": 917,
        "indi": 0.95
      },
      {
        "year": 2020,
        "rep": 254474,
        "dem": 19394,
        "indi": 0.96
      }
    ],
    "citation": [{
      "arthor": "none",
      "title": "J Crew Group",
      "publihser": "OpenSecrets",
      "pages": "34",
      "date": "none",
      "url": "https://www.opensecrets.org/orgs/h-m-co/summary?id=D000042667"
    }]
  })
})






// Serve any static files
 app.use(express.static(path.join(__dirname, '../client/build')));
 // Handle React routing, return all requests to React app
   app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
   });

// app.get("/companies", (req, res, next) => {
//   db.all("SELECT * FROM company", [], (err, rows) => {
//       if (err) {
//           res.status(400).json({ "error": err.message });
//           return;
//       }
//       if(rows){
//         res.status(200).json({ rows });
//       }
//   });
// });

// Error page



app.listen(port, () => {
  console.log(`Server is listening on port`)
})