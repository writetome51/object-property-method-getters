"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var append_prepend_1 = require("@writetome51/array-append-prepend/append-prepend");
function getUninheritedPropertiesAndMethods(obj) {
    var propertiesAndMethods = Object.getOwnPropertyNames(obj);
    var objProto = Object.getPrototypeOf(obj);
    var moreProperties = Object.getOwnPropertyNames(objProto);
    append_prepend_1.append(moreProperties, propertiesAndMethods);
    return propertiesAndMethods;
}
exports.getUninheritedPropertiesAndMethods = getUninheritedPropertiesAndMethods;
