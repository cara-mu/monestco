const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const exampleData = require('../data/dummy.json');

app.get('/', (req, res) => {
  res.status(200).send('Monest Home Page!')
})

// This would just be the page for singular company
app.get('/company/:companyID', function(req,res,next){
  var companyID = req.params.companyID;
  var check = 0;
  for (i = 0; i < exampleData.length; i++){
    if(exampleData[i]._id == companyID){
        console.log(exampleData[i])
        res.status(200).send(exampleData[i])
    }
  }
  if(check == 0){
      next();
  }
})

//Comparison Page with these 3 companies
app.get('/comparison/:companyID1/:companyID2/:companyID3', function(req,res,next){
  var companyID1 = req.params.companyID1;
  var companyID2 = req.params.companyID2;
  var companyID3 = req.params.companyID3;

  console.log(companyID1, companyID2,companyID3)
  res.status(200).send('Comparison Page')
})

// Error page
app.get('*', function(req, res) {
  res.status(404).send("Error Page")
})

app.listen(port, () => {
  console.log(`Server is listening on`, port)
})