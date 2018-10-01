import { getUniqueItems } from 'intuitive-array-handlers/no_modify/get/getUniqueItems';
import { appendMany } from 'intuitive-array-handlers/modify/return_void/appendOne_appendMany';


// Returns all enumerated and inherited properties & methods of obj.

export function getAllPropertiesMethods(obj): string[] {
	let allproperties = Object.getOwnPropertyNames(obj);

	let prototype = Object.getPrototypeOf(obj); // gets own class prototype.
	while (prototype !== (undefined || null)) {
		let methods = Object.getOwnPropertyNames(prototype);
		if (methods) allProperties.push(methods);
		prototype = Object.getPrototypeOf(prototype); // gets parent prototype.
	}
	return getUniqueItems(allproperties);
}
