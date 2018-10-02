import { removeAllOf } from '@writetome51/array-remove-all-of-first-of/removeAllOf_removeAllOfEach';
import { getUninheritedPropertiesAndMethods } from './getUninheritedPropertiesAndMethods';
import { append } from '@writetome51/array-append-prepend/append-prepend';


export function getUninheritedMethods(obj): string[] {
	let propertiesAndMethods = getUninheritedPropertiesAndMethods(obj);
	let methods = [];
	for (let i = 0; i < propertiesAndMethods.length; ++i) {
		if (typeof obj[propertiesAndMethods[i]] === 'function') {
			append([propertiesAndMethods[i]], methods);
		}
	}
	removeAllOf('constructor', methods);
	return methods;
}
