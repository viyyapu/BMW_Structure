import * as mongoose from 'mongoose';

const resourceListSchema = new mongoose.Schema(
  {
    empId: Number,
    firstName: String,
    lastName: String,
    department: String,
    organization: String,
    availability: Number,
    groupTeam: String,
    allocation: Number,
    startDate: String,
    endDate: String,
    role: String
  },
);

module.exports = mongoose.model('resource', resourceListSchema);

// export const projectModel = ()=> mongoose.model('getProjectsModel', projectListSchema);
