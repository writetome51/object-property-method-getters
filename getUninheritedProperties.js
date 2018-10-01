"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUninheritedPropertiesAndMethods_1 = require("./getUninheritedPropertiesAndMethods");
var appendOne_appendMany_1 = require("intuitive-array-handlers/modify/return_void/appendOne_appendMany");
function getUninheritedProperties(obj) {
    var propertiesAndMethods = getUninheritedPropertiesAndMethods_1.getUninheritedPropertiesAndMethods(obj);
    var properties = [], i = -1;
    while (++i < propertiesAndMethods.length) {
        if (typeof obj[propertiesAndMethods[i]] !== 'function') {
            appendOne_appendMany_1.appendOne(propertiesAndMethods[i], properties);
        }
    }
    return properties;
}
exports.getUninheritedProperties = getUninheritedProperties;
