"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUniqueItems_1 = require("intuitive-array-handlers/no_modify/get/getUniqueItems");
var appendOne_appendMany_1 = require("intuitive-array-handlers/modify/return_void/appendOne_appendMany");
// Returns all enumerated and inherited properties & methods of obj.
function getAllPropertiesMethods(obj) {
    var allproperties = Object.getOwnPropertyNames(obj);
    var prototype = Object.getPrototypeOf(obj); // gets own class prototype.
    while (prototype !== (undefined || null)) {
        var methods = Object.getOwnPropertyNames(prototype);
        if (methods)
            appendOne_appendMany_1.appendMany(methods, allproperties);
        prototype = Object.getPrototypeOf(prototype); // gets parent prototype.
    }
    return getUniqueItems_1.getUniqueItems(allproperties);
}
exports.getAllPropertiesMethods = getAllPropertiesMethods;
