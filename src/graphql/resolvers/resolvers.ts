import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../models/context';
import { IResolvers } from 'graphql-tools';
import * as jwt from 'jsonwebtoken';
import { AppConstants } from '../../constants/app.constants';
import { UsersController } from '../../controllers/users.controller';

const usersController = new UsersController();

const resolvers: IResolvers = {
  Query: {
    token: (_, args: any) => {
      return jwt.sign({ data: args[AppConstants.EMAIL] }, <string>process.env.auth_encryption_salt);
    },
    getUsers: (_: void, args: any, ctx: Context, _info: GraphQLResolveInfo) => {
      console.log(args)
      return usersController.getUsers(args, ctx);
    },
    // getProjects: () => {
    //   console.log()
    //   return usersController.getProjects();
    // },
    // getResources: (_: void, args: any, ctx: Context, _info: GraphQLResolveInfo) => {
    //   console.log(args)
    //   return usersController.getResources(args, ctx);
    // },
    findByUserId: (_: void, args: any, ctx: Context, _info: GraphQLResolveInfo) => {
      return usersController.findByUserId(args, ctx);
    }
  },
  Mutation: {
    addProject:(_, inputObject, ctx: Context)=>{
      return usersController.addProject(inputObject, ctx);
    },
    updateProject: (_, inputObject, ctx: Context) => {
      return usersController.updateProject(inputObject, ctx);
    },
    deleteProject: (_, inputObject, ctx: Context) => {
      return usersController.deleteProject(inputObject, ctx);
    }, 
    addResource:(_, inputObject, ctx: Context)=>{
      return usersController.addResouce(inputObject, ctx);
    },
    updateResource: (_, inputObject, ctx: Context) => {
      return usersController.updateResource(inputObject, ctx);
    },
    deleteResource: (_, inputObject, ctx: Context) => {
      return usersController.deleteResource(inputObject, ctx);
    }, 
    addUser: (_, inputObject, ctx: Context) => {
      return usersController.addUser(inputObject, ctx);
    },
    updateUser: (_, inputObject, ctx: Context) => {
      return usersController.updateUser(inputObject, ctx);
    },
    deleteUser: (_, inputObject, ctx: Context) => {
      return usersController.deleteUser(inputObject, ctx);
    }, 
  }
};

export default resolvers;

// import getAllProjects from './getProjects';

// export default {
//   Query:{
//     getAllProjects
//   }
// }


