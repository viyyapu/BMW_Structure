import { Context } from '../models/context';
import { buildErrorResponse } from '../utils/buildErrorResponse';
import { successResponse } from '../utils/successResponse'
const Users = require('../models/users');
const Projects = require('../models/projects');
const Resources =require('../models/resource');

export class UsersController {

  async addProject(inputObject: any, ctx: Context) {
    try {
      console.log(inputObject)
      const result = await Projects.create(inputObject.input);
      return successResponse(result, 'created');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async updateProject(inputObject: any, ctx: Context) {
    try {
      const result = await Projects.findOneAndUpdate({ _id: inputObject.id }, inputObject.input);
      if (result) {
        return successResponse(result, 'updated');
      }
      return successResponse(result, 'notUpdated');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async deleteProject(inputObject: any, ctx: Context) {
    try {
      const result = await Projects.findOneAndDelete({ _id: inputObject.id })
      return successResponse(result, 'deleted');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  // async getProjects() {
  //   try {
      
  //     const result = await Projects.find();
  //     return successResponse(result, 'fetch');
  //   } catch (error) {
  //     return buildErrorResponse(error)
  //   }
  // }

  async addResouce(inputObject: any, ctx: Context) {
    try {
      const result = await Resources.create(inputObject.input);
      return successResponse(result, 'created');
    } catch (error) {
      return buildErrorResponse(error)
    }  
  }

  async updateResource(inputObject: any, ctx: Context) {
    try {
      const result = await Resources.findOneAndUpdate({ _id: inputObject.id }, inputObject.input);
      if (result) {
        return successResponse(result, 'updated');
      }
      return successResponse(result, 'notUpdated');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async deleteResource(inputObject: any, ctx: Context) {
    try {
      console.log(inputObject)
      const result = await Resources.findOneAndDelete({ _id: inputObject.id })
      console.log(result)
      return successResponse(result, 'deleted');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  // async getResources(inputObject: any, ctx: Context) {
  //   try {
  //     let contactType = []
  //     if (inputObject.contactType) {
  //       contactType.push(inputObject.contactType)
  //     }
  //     const result = await Resources.find({ contactType: contactType });
  //     return successResponse(result, 'fetch');
  //   } catch (error) {
  //     return buildErrorResponse(error)
  //   }
  // }

  async addUser(inputObject: any, ctx: Context) {
    try {

      const result = await Users.create(inputObject.input);
      return successResponse(result, 'created');
    } catch (error) {
    return buildErrorResponse(error)
    }
  }

  async getUsers(inputObject: any, ctx: Context) {
    try {
      let contactType = []
      if (inputObject.contactType) {
        contactType.push(inputObject.contactType)
      }
      const result = await Users.find({ contactType: contactType });
      return successResponse(result, 'fetch');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async updateUser(inputObject: any, ctx: Context) {
    try {
      const result = await Users.findOneAndUpdate({ _id: inputObject.id }, inputObject.input);
      if (result) {
        return successResponse(result, 'updated');
      }
      return successResponse(result, 'notUpdated');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async deleteUser(inputObject: any, ctx: Context) {
    try {
      
      const result = await Users.findOneAndDelete({ _id: inputObject.id })
      console.log(result)
      return successResponse(result, 'deleted');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async findByUserId(inputObject: any, ctx: Context) {
    try {
      const result = await Users.findById(inputObject.id)
      console.log(result)
      return successResponse(result, 'deleted');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }


}


