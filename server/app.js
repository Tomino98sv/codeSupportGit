//zadefinovanie ake knižnice používame
const TokenGenerator = require('uuid-token-generator');
const cors=require('cors');
const express = require('express');
const db=require('./database');

//Definuje token generaciu(pomocou knižnice na tokeny)
const tokgen = new TokenGenerator(128, TokenGenerator.BASE62);
//console.log(tokgen);
var app=express();
app.use(express.json());
app.use(cors());


app.post('/register',(req,res)=>{
    console.log("Request on /register :");
    db.register(req.body,data=>{
        console.log("tusom");
        res.status(data.status).send(data.quote);
    });
});

app.post('/login',(req,res)=>{
    console.log("Request on /login :");
    db.login(req.body,data=>{
        //console.log("tusom");
        res.status(data.status).send(data.quote);
    });
});

app.listen(1203,()=>{
    console.log("Sever listening on port 1203");
});