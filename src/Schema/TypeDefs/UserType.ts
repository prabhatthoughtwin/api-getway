import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
  } from 'graphql';

const userType = new GraphQLObjectType({
    name:'user',
    fields:()=>({
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
      token:{type:GraphQLString},
    }),
  })

  export default userType