import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
  } from 'graphql';
  
 
import {USER_LIST,USER_LIST2,login} from './Queries/user';
import {userAdd} from './Mutations/user';
  
  const RootQuery = new GraphQLObjectType({
    name:'AUTH',
    fields:{
      userList:USER_LIST,
      userlist2:USER_LIST2,
      login:login,
    }
  })
  const Mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
      
      createUser:userAdd,
     
    }
  })
  
  
  export default new GraphQLSchema({query:RootQuery,mutation:Mutation});