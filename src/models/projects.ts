import * as mongoose from 'mongoose';

const projectListSchema = new mongoose.Schema(
  {
    projectId: Number,
    title: String,
    description: String,
    owner: String,
    date: String,
    endDate: String,
    timeline: String,
    noOfFte: Number,
    fteAllocation: String,
    status: String
  },
);

module.exports = mongoose.model('project', projectListSchema);

// export const projectModel = ()=> mongoose.model('getProjectsModel', projectListSchema);
