"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUniqueItems_1 = require("@writetome51/array-get-duplicates-and-unique-items/getUniqueItems");
var array_append_prepend_1 = require("@writetome51/array-append-prepend");
// Returns all enumerated and inherited properties & methods of obj.
function getAllPropertiesMethods(obj) {
    var allProperties = Object.getOwnPropertyNames(obj);
    var prototype = Object.getPrototypeOf(obj); // gets own class prototype.
    while (prototype !== (undefined || null)) {
        var methods = Object.getOwnPropertyNames(prototype);
        if (methods)
            array_append_prepend_1.append(methods, allProperties);
        prototype = Object.getPrototypeOf(prototype); // gets parent prototype.
    }
    return getUniqueItems_1.getUniqueItems(allProperties);
}
exports.getAllPropertiesMethods = getAllPropertiesMethods;
