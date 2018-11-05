"use strict";
// Only way to ferret out private methods/properties here is to make sure all your
// privates begin with an underscore.
Object.defineProperty(exports, "__esModule", { value: true });
function _isPublicName(name) {
    return (name[0] !== '_');
}
exports._isPublicName = _isPublicName;
