import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
  } from 'graphql';
import userType from '../TypeDefs/UserType';
import { client } from '../../client';

const USER_LIST = {
    type:new GraphQLList(userType),
    resolve:async(parent:any,args:any,context:any)=>{
        // console.log(parent);
        const cont = await context()
        // console.log(cont);
        let rest:Array<any> = [];
        // write DB query for data
        const data1:any = await new Promise((resolve, reject) => {
          client.getAll(null, (err: any, data: any) => {
            if (err) {
              reject(err); 
            } else {
              resolve(data);
            }
          });
        });
      
        for (let i = 0; i < data1.users.length; i++) {
          rest.push(data1.users[i]);
        }
        console.log(rest)
        return rest;
    }
  }

  const USER_LIST2 = {
    type:new GraphQLList(userType),
    resolve(parent:any,args:any){
      let data = [{id:4,name:"koko",email:"tete@gmail.com",phone:"45455555"},{id:3,name:"pppp",email:"tete@gmail.com",phone:"45455555"}]
    return data;
    }
  }

  const login = {
    type:new GraphQLList(userType),
    args:{
        phone:{type:GraphQLString},
        otp:{type:GraphQLString},
    },
    
    
    resolve:async(parent:any,args:any)=>{
     
      let rest:Array<any> = [];
      // write DB query for data
      const data1:any = await new Promise((resolve, reject) => {
        client.get(args, (err: any, data: any) => {
      
          
          if (err) {
            reject(err); 
          } else {
            resolve(data);
          }
        });
      });
     
        rest.push(data1);
     
    return rest;
    }
  }

  export{ USER_LIST,USER_LIST2,login};