import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList,
  } from 'graphql';

const statusType = new GraphQLObjectType({
    name:'status',
    fields:()=>({
      success:{type:GraphQLBoolean},
      message:{type:GraphQLString},
      error:{type:GraphQLString},
     
    }),
  })

  export default statusType