const PORT = 5000 
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
let datas = []
app.all('/',async(req,res) => {
    if(req.body.noise)
    {
     datas = req.body;
    }
    console.log(JSON.stringify(req.body));
    res.json(datas)
})

app.listen(PORT, (req,res) => {
    console.log(`Server is listening on port ${PORT}`)
})