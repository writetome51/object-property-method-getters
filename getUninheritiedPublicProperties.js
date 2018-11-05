"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUninheritedProperties_1 = require("./getUninheritedProperties");
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var _isPublicName_1 = require("./privy/_isPublicName");
// @ts-ignore
var arrayPluck = require('array-pluck');
// Only way to ferret out private properties here is to make sure all your private
// properties begin with an underscore.
function getUninheritedPublicProperties(obj) {
    var properties = getUninheritedProperties_1.getUninheritedProperties(obj);
    var valueIndexPairs = array_get_filtered_results_1.getFilteredResults(_isPublicName_1._isPublicName, properties);
    return arrayPluck(valueIndexPairs, 'value');
}
exports.getUninheritedPublicProperties = getUninheritedPublicProperties;
