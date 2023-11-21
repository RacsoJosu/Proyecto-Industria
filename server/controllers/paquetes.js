const {findAllPackages} = require('../repository/paquetes');
const { handleHttpError } = require('../utils/handleError');


const getPackages = async (req,res)=>{

    try {
        const packages = await findAllPackages()
        res.json({packages})
    } catch (error) {
        console.log({error})
        handleHttpError(res,"BAD_REQUEST", 500)
    }
}

module.exports = {
    getPackages
};
