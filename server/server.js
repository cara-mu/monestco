//header declarations
const express = require('express');
const app = express();

//server will open at localhost:4000
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("BOOOOOOOP")
})
app.listen(PORT);
