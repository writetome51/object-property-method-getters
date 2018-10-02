"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFilteredResults_1 = require("@writetome51/array-non-modifying-getters-basic/getFilteredResults");
var getAllPropertiesMethods_1 = require("./getAllPropertiesMethods");
function _getFunctionsOrNonFunctions(obj, functionsOrNon) {
    var propertiesMethods = getAllPropertiesMethods_1.getAllPropertiesMethods(obj);
    return getFilteredResults_1.getFilteredResults(function (item) {
        if (functionsOrNon === 'functions')
            return ((typeof obj[item]) === 'function');
        else
            return ((typeof obj[item]) !== 'function');
    }, propertiesMethods);
}
exports._getFunctionsOrNonFunctions = _getFunctionsOrNonFunctions;
