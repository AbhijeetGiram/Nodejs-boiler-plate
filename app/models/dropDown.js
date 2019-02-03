'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let dropDownSchema = new Schema({
  options:[]
})


mongoose.model('dropdown_options', dropDownSchema);