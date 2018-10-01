import { appendOne } from 'intuitive-array-handlers/modify/return_void/appendOne_appendMany';
import { removeAllOf } from 'intuitive-array-handlers/modify/return_void/removeAllOf_removeAllOfEach';
import { getUninheritedPropertiesAndMethods } from './getUninheritedPropertiesAndMethods';


export function getUninheritedMethods(obj): string[] {
	let propertiesAndMethods = getUninheritedPropertiesAndMethods(obj);
	let methods = [];
	for (let i = 0; i < propertiesAndMethods.length; ++i) {
		if (typeof obj[propertiesAndMethods[i]] === 'function') {
			appendOne(propertiesAndMethods[i], methods);
		}
	}
	removeAllOf('constructor', methods);
	return methods;
}
