"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _getFunctionsOrNonFunctions_1 = require("./privy/_getFunctionsOrNonFunctions");
// To be clear, this does not return methods.  For getting methods, use getAllMethods().
function getAllProperties(obj) {
    return _getFunctionsOrNonFunctions_1._getFunctionsOrNonFunctions(obj, 'non');
}
exports.getAllProperties = getAllProperties;
function getAllMethods(obj) {
    return _getFunctionsOrNonFunctions_1._getFunctionsOrNonFunctions(obj, 'functions');
}
exports.getAllMethods = getAllMethods;
