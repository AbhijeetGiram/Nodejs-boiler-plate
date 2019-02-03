const express = require('express');
const router = express.Router();
const dropDownController = require("./../../app/controllers/dropDownController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/dropDown`;

    // defining routes.

    app.get(`${baseUrl}/getOptions`, dropDownController.getOptions);

    /**
     * @apiGroup DropDown
     * @apiVersion  1.0.0
     * @api {post} /api/v1/dropDown/getOptions api for getting the DropDown options.
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             "error": false,
            "message": "Options Found",
            "status": 200,
            "data": {
                "options": [
                    "[{\"label\":\"INDIA\"",
                    "\"value\":\"In\"}",
                    "{\"label\":\"United States\"",
                    "\"value\":\"US\"}]"
                ],
                "_id": "5c10f6cc87c59e0a6088db16"
            }
        }
     *  @apiErrorExample {json} Error-Response:
            {
                "error": true,
                "message": "No Options Found",
                "status": 400,
                "data": null
            }     
    */

    // params: dropDownOptions
    app.post(`${baseUrl}/updateOptions`, dropDownController.updateOptions);

    /**
     * @apiGroup dropDown
     * @apiVersion  1.0.0
     * @api {post} /api/v1/dropDown/updateOptions to update DropDown Options
     *
     * @apiParam {string} options Dropdown options. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "options updated",
            "status":200,
            "data":{
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
    *  @apiErrorExample {json} Error-Response:
            {
                "error": true,
                "message": "Options Not Updated",
                "status": 400,
                "data": null
            }  
    */

}
