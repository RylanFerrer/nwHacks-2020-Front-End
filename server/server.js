const PORT = 5000 
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(bodyParser.json())
let datas = []
app.all('/', jsonParser,async(req,res) => {
    if(req.body !== {})
    {
     datas = req.body;
    }
    res.json(datas)
})

app.listen(PORT, (req,res) => {
    console.log(`Server is listening on port ${PORT}`)
})