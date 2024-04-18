const express = require("express") 
const app = express()
const question = require('./question.json')
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());



app.get("/question",(req,res)=>{
    res.json(question)
})
app.post("/add",(req,res)=>{
    let setQuestion = question
    console.log(req.body)
    setQuestion.push(req.body)
    res.status(201).json(setQuestion)
    
})
app.listen(5000,()=>{
    console.log("Server listening port 5000")
})