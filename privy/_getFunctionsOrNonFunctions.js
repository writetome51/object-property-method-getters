"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var getAllPropertiesMethods_1 = require("../getAllPropertiesMethods");
// @ts-ignore
var arrayPluck = require('array-pluck');
function _getFunctionsOrNonFunctions(obj, functionsOrNon) {
    var propertiesMethods = getAllPropertiesMethods_1.getAllPropertiesMethods(obj);
    var valueIndexPairs = array_get_filtered_results_1.getFilteredResults(function (item) {
        if (functionsOrNon === 'functions')
            return ((typeof obj[item]) === 'function');
        else
            return ((typeof obj[item]) !== 'function');
    }, propertiesMethods);
    return arrayPluck(valueIndexPairs, 'value');
}
exports._getFunctionsOrNonFunctions = _getFunctionsOrNonFunctions;
