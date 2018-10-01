"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendOne_appendMany_1 = require("intuitive-array-handlers/modify/return_void/appendOne_appendMany");
function getUninheritedPropertiesAndMethods(obj) {
    var propertiesAndMethods = Object.getOwnPropertyNames(obj);
    var objProto = Object.getPrototypeOf(obj);
    var moreProperties = Object.getOwnPropertyNames(objProto);
    appendOne_appendMany_1.appendMany(moreProperties, propertiesAndMethods);
    return propertiesAndMethods;
}
exports.getUninheritedPropertiesAndMethods = getUninheritedPropertiesAndMethods;
