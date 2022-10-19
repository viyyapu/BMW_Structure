import * as mongoose from 'mongoose';

const budgetInformationSchema = new mongoose.Schema({
    fundingDepartment: String,
    fteRequired: Number,
    estimatedBudget: Number,
    actualBudget: Number
})

const projectListSchema = new mongoose.Schema(
  {
    projectId: String,
    title: String,
    description: String,
    owner: String,
    date: String,
    endDate: String,
    timeline: String,
    noOfFte: Number,
    fteAllocation: String,
    status: String,
    budgetInformation : budgetInformationSchema
  },
);

module.exports = mongoose.model('project', projectListSchema);

// export const projectModel = ()=> mongoose.model('getProjectsModel', projectListSchema);
