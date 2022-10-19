import { Context } from '../models/context';
import { buildErrorResponse } from '../utils/buildErrorResponse';
import { successResponse } from '../utils/successResponse'
const Users = require('../models/users');
const Projects = require('../models/projects');
const Resources =require('../models/resource');
const MetaData = require('../models/metaData');

export class UsersController {

  async addProject(inputObject: any, ctx: Context) {
    try {
      console.log(inputObject)
      const pattern = '000000'
      const totalProject = await Projects.countDocuments() + 1;
      const projectId = totalProject.toString().padStart(pattern.length, '0');
      console.log(projectId)
      inputObject.input.projectId = projectId;
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

  async getProjectsList() {
    try {
      const result = await Projects.find();
      return successResponse(result, 'fetch');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async addResouce(inputObject: any, ctx: Context) {
    try {
      console.log('resource',inputObject)
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

  async getResources() {
    try {
      const result = await Resources.find();
      console.log('result', result)
      return successResponse(result, 'fetch');
    } catch (error) {
      return buildErrorResponse(error)
    }
  }

  async addUser(inputObject: any, ctx: Context) {
    try {

      const result = await Users.create(inputObject.input);
      return successResponse(result, 'created');
    } catch (error) {
    return buildErrorResponse(error)
    }
  }

  async getUsers() {
    try {
      const result = await Users.find();
      console.log('result', result)
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

  async addMetaData(inputObject: any, ctx: Context) {
    try {
      console.log('MetaData',inputObject)
      const result = await MetaData.create(inputObject.input);
      return successResponse(result, 'created');
    } catch (error) {
      return buildErrorResponse(error)
    }  
  }

l metaDataDetails = async getMetaData() {
    try {
      console.log('hiii')
      const result = await MetaData.find();
      console.log('result', result)
      return successResponse(result, 'fetch');
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


