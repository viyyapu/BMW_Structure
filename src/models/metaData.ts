import * as mongoose from 'mongoose';

const metaDataSchema = new mongoose.Schema(
    {
    outputArtifact: [String],
    accountingDetails: [String],
    swProcessStep: [String],
    spGeneration: [String],
    ecu: [String],
    productDomainGroup: [String],
    productDomain: [String],
    product: [String],
    areaProduct: [String]
}
);

module.exports = mongoose.model('metaData', metaDataSchema);