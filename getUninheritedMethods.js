"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
var getUninheritedPropertiesAndMethods_1 = require("./getUninheritedPropertiesAndMethods");
var array_append_prepend_1 = require("@writetome51/array-append-prepend");
function getUninheritedMethods(obj) {
    var propertiesAndMethods = getUninheritedPropertiesAndMethods_1.getUninheritedPropertiesAndMethods(obj);
    var methods = [];
    for (var i = 0; i < propertiesAndMethods.length; ++i) {
        if (typeof obj[propertiesAndMethods[i]] === 'function') {
            array_append_prepend_1.append([propertiesAndMethods[i]], methods);
        }
    }
    array_remove_all_of_first_of_1.removeAllOf('constructor', methods);
    return methods;
}
exports.getUninheritedMethods = getUninheritedMethods;
