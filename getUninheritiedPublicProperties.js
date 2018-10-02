"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUninheritedProperties_1 = require("./getUninheritedProperties");
var getFilteredResults_1 = require("@writetome51/array-non-modifying-getters-basic/getFilteredResults");
var _isPublicName_1 = require("./_isPublicName");
// Only way to ferret out private properties here is to make sure all your private
// properties begin with an underscore.
function getUninheritedPublicProperties(obj) {
    var properties = getUninheritedProperties_1.getUninheritedProperties(obj);
    properties = getFilteredResults_1.getFilteredResults(_isPublicName_1._isPublicName, properties);
    return properties;
}
exports.getUninheritedPublicProperties = getUninheritedPublicProperties;
