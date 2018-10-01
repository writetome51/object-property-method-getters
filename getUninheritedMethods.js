"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendOne_appendMany_1 = require("intuitive-array-handlers/modify/return_void/appendOne_appendMany");
var removeAllOf_removeAllOfEach_1 = require("intuitive-array-handlers/modify/return_void/removeAllOf_removeAllOfEach");
var getUninheritedPropertiesAndMethods_1 = require("./getUninheritedPropertiesAndMethods");
function getUninheritedMethods(obj) {
    var propertiesAndMethods = getUninheritedPropertiesAndMethods_1.getUninheritedPropertiesAndMethods(obj);
    var methods = [];
    for (var i = 0; i < propertiesAndMethods.length; ++i) {
        if (typeof obj[propertiesAndMethods[i]] === 'function') {
            appendOne_appendMany_1.appendOne(propertiesAndMethods[i], methods);
        }
    }
    removeAllOf_removeAllOfEach_1.removeAllOf('constructor', methods);
    return methods;
}
exports.getUninheritedMethods = getUninheritedMethods;
