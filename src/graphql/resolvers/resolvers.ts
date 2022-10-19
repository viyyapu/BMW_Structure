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
    getUsers: () => {
      return usersController.getUsers();
    },
    getProjects: () => {
      return usersController.getProjectsList();
    },
    getResources: () => {
      return usersController.getResources();
    },
    getMetaData: () => {
      console.log("Hello")
      return usersController.getMetaData();
    },
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
    addMetaData:(_, inputObject, ctx: Context)=>{
      return usersController.addMetaData(inputObject, ctx);
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


