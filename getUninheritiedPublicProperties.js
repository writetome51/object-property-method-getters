"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUninheritedProperties_1 = require("./getUninheritedProperties");
var getFilteredResults_1 = require("intuitive-array-handlers/no_modify/get/getFilteredResults");
// Only way to ferret out private properties here is to make sure all your private
// properties begin with an underscore.
function getUninheritedPublicProperties(obj) {
    var properties = getUninheritedProperties_1.getUninheritedProperties(obj);
    properties = getFilteredResults_1.getFilteredResults(function (propertyName) {
        return (propertyName[0] !== '_');
    }, properties);
    return properties;
}
exports.getUninheritedPublicProperties = getUninheritedPublicProperties;
