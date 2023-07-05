
import schema from "./Schema/index";

import path from "path";
import {Server} from "http";
import {graphqlHTTP} from "express-graphql";
import express,{Request, Response, NextFunction,Application} from "express";
import bodyParser from "body-parser";




const app:Application = express();

const root = {
    //we can use everywhere
    key:"kokokoko"
}
const context = async(req:any)=>{
    console.log(req);
    const host = req.headers.host
    const token = req.headers.token
    return {host,token}

    
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/twedding",graphqlHTTP(async req=>({schema,rootValue:root,graphiql:true,context:()=>context(req)})))

const PORT = process.env.PORT || 3000;
const server:Server = app.listen(PORT, () => {
    console.log("Server running at port %d", PORT);
});


// mutation{
//     createUser(name:"test",email:"tetetep@gmail.com",phone:"00011111",dob:"02/12/23",gender:"Male",otp:"2123",is_divorced:true,address:"testst",profile_pic:"teet",religion:"hindu",education:"hindi",country:"india",status:"active"){
//     name,
//     email,
//     gender
      
//     }
//   }