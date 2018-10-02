"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeAllOf_removeAllOfEach_1 = require("@writetome51/array-remove-all-of-first-of/removeAllOf_removeAllOfEach");
var getUninheritedPropertiesAndMethods_1 = require("./getUninheritedPropertiesAndMethods");
var append_prepend_1 = require("@writetome51/array-append-prepend/append-prepend");
function getUninheritedMethods(obj) {
    var propertiesAndMethods = getUninheritedPropertiesAndMethods_1.getUninheritedPropertiesAndMethods(obj);
    var methods = [];
    for (var i = 0; i < propertiesAndMethods.length; ++i) {
        if (typeof obj[propertiesAndMethods[i]] === 'function') {
            append_prepend_1.append([propertiesAndMethods[i]], methods);
        }
    }
    removeAllOf_removeAllOfEach_1.removeAllOf('constructor', methods);
    return methods;
}
exports.getUninheritedMethods = getUninheritedMethods;
