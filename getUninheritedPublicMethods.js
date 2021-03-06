"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFilteredResults_1 = require("@writetome51/array-non-modifying-getters-basic/getFilteredResults");
var getUninheritedMethods_1 = require("./getUninheritedMethods");
var _isPublicName_1 = require("./privy/_isPublicName");
// @ts-ignore
var arrayPluck = require('array-pluck');
function getUninheritedPublicMethods(obj) {
    var methods = getUninheritedMethods_1.getUninheritedMethods(obj);
    var valueIndexPairs = getFilteredResults_1.getFilteredResults(_isPublicName_1._isPublicName, methods);
    return arrayPluck(valueIndexPairs, 'value');
}
exports.getUninheritedPublicMethods = getUninheritedPublicMethods;
