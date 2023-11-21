const {PaqueteModel} = require('../models');

const findAllPackages = async ()=> await PaqueteModel.findAll()

module.exports = {
    findAllPackages
};
