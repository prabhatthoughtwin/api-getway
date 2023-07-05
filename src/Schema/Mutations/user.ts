import {
    GraphQLObjectType,
    GraphQLSchema,
   
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
  } from 'graphql';
import userType from '../TypeDefs/UserType';
import statusType from '../TypeDefs/StatusType';
import { client } from '../../client';

const userAdd = {
    type:userType,
    args:{
      id:{type:GraphQLInt},
      name:{type:GraphQLString},
      email:{type:GraphQLString},
      phone:{type:GraphQLString},
      dob:{type:GraphQLString},
      gender:{type:GraphQLString},
      otp:{type:GraphQLString},
      is_divorced :{type:GraphQLBoolean},
      address:{type:GraphQLString},
      profile_pic:{type:GraphQLString},
      religion:{type:GraphQLString},
      education:{type:GraphQLString},
      country:{type:GraphQLString},
      status:{type:GraphQLString},
    },

    
    resolve:async (parent:any,args:any)=>{
        // write DB query for data
        // console.log(args);
     const data1:any = await new Promise((resolve, reject) => {
      client.insert(args, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    console.log(data1);
     
    return args;
    }
  }

  const userUpdate = {
    type:statusType,
    args:{
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString},
    },
    resolve:async (parent:any,args:any)=>{
        // write DB query for data

     console.log(args);
     
    return {success:true,message:"Updated Succesfuly",error:""};
    }
  }
  export{ userAdd,userUpdate};