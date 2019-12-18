const mysql = require('mysql');
const express = require('express');
const TokenGenerator = require('uuid-token-generator');
const tokgen = new TokenGenerator(128, TokenGenerator.BASE62);

let tokens=[];

let con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "angular",
    port: "3306"
});
con.connect();

module.exports={

    register(data,callbackR){
        let login=data.username;
        let password=data.password;        
        //console.log("connected");
        let sql = "INSERT INTO users(username,password) "+
        "VALUES ('"+login+"','"+password+"');";
        //console.log(sql);
        con.query(sql,(err,res)=>{
            if (err){
            console.log(err);
            callbackR({"status":403,"quote":"This username is already taken"});
        }
        else{
            callbackR({"status":200,"quote":"New user: "+login+" Successfully registered!"}); 
        }
        });
    },

    login(data,callbackR){
        let login=data.username;
        let password=data.password;        
        //console.log("connected");
        let sql = "SELECT id from users "+
        "where username like '"+login+"' and password like '"+password+"';";
        console.log(sql);
        con.query(sql,(err,res)=>{
            if (err) console.log(err);
            if(res===undefined){
            callbackR({"status":401,"quote":"Not existing user"});
            }
            else{
                let json={username:login,token:tokgen.generate()}
                const index = tokens.findIndex(x => x.username === login);
                if (index !== undefined) tokens.splice(index, 1);
                tokens.push(json);
                console.log(tokens);
                callbackR({"status":200,"quote":json}); 
            }
        });
    }
}