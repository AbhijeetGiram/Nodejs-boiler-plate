const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')

/* Models */
const dropDownModel = mongoose.model('dropdown_options');


// start getOptions function 

let getOptions = (req,res)=>{

    dropDownModel.findOne({},(err, options) => {
        if (err) {
            logger.error("Unable to find options", "dropDownController: getOptions", 10);
            let apiResponse = response.generate(true, "Unable to find options", 400, null);
            res.send(apiResponse);
        }
        else if (check.isEmpty(options)) {
            logger.error("Options Not avaialable", "dropDownController: getOptions", 10);
            let apiResponse = response.generate(true, "Options Not available", 400, null);
            res.send(apiResponse);
        }
        else {
            logger.info("Options Found", "dropDownController: getOptions", 10);
            let apiResponse = response.generate(false, "Options Found", 200, options);
            res.send(apiResponse);
        }
    })//end find

}//end getOptions

let updateOptions = (req, res) => {   
    
     let itemsArray = req.body.options.split(',');
        dropDownModel.update({},{ options: itemsArray },(err, dropDownResult) => {
            if (err) {
                logger.error("Unable to find options", "dropDownController: updateOptions", 10);
                let apiResponse = response.generate(true, "Unable to find options", 400, null);
                res.send(apiResponse);
            }
            else if (check.isEmpty(dropDownResult)) {
                logger.error("DropDown options Not updated", "dropDownController: updateOptions", 10);
                let apiResponse = response.generate(true, "DropDown options Not Updated", 400, null);
                res.send(apiResponse);
            }
            else {
                logger.info("Options updated", "dropDownController: updateOptions", 10);
                let apiResponse = response.generate(false, "Options updated", 200,dropDownResult);
                res.send(apiResponse);
            }
        })//end update
   

}// end updateOption function 


module.exports = {

    getOptions: getOptions,
    updateOptions: updateOptions

}// end exports