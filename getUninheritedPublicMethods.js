"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFilteredResults_1 = require("intuitive-array-handlers/no_modify/get/getFilteredResults");
var getUninheritedMethods_1 = require("./getUninheritedMethods");
// Only way to ferret out private methods here is to make sure all your private methods
// begin with an underscore.
function getUninheritedPublicMethods(obj) {
    var methods = getUninheritedMethods_1.getUninheritedMethods(obj);
    methods = getFilteredResults_1.getFilteredResults(function (methodName) {
        return (methodName[0] !== '_');
    }, methods);
    return methods;
}
exports.getUninheritedPublicMethods = getUninheritedPublicMethods;
