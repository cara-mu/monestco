const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
      console.error("Error opening database " + err.message);
  } else {
    console.log("success")
  }
});

app.get('/', (req, res) => {
  res.status(200).send('Monest Home Page!')
})


app.get("/companies", (req, res, next) => {
  db.all("SELECT * FROM companies", [], (err, rows) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      if(rows){
        res.status(200).json({ rows });
      }
  });
});
app.get('/', (req, res) => {
  res.status(200).send('Monest Home Page!')
})

// This would just be the page for singular company
app.get('/companies/:companyName', function(req,res,next){
  var companyName = req.params.companyName;

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
// Error page
app.get('*', function(req, res) {
  res.status(404).send("Error Page")
})

app.listen(port, () => {
  console.log(`Server is listening on`, port)
})