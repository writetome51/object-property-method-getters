"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUninheritedPropertiesAndMethods_1 = require("./getUninheritedPropertiesAndMethods");
var append_prepend_1 = require("@writetome51/array-append-prepend/append-prepend");
function getUninheritedProperties(obj) {
    var propertiesAndMethods = getUninheritedPropertiesAndMethods_1.getUninheritedPropertiesAndMethods(obj);
    var properties = [], i = -1;
    while (++i < propertiesAndMethods.length) {
        if (typeof obj[propertiesAndMethods[i]] !== 'function') {
            append_prepend_1.append([propertiesAndMethods[i]], properties);
        }
    }
    return properties;
}
exports.getUninheritedProperties = getUninheritedProperties;
