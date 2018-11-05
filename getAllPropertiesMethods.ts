import { getUniqueItems } from '@writetome51/array-get-duplicates-and-unique-items/getUniqueItems';
import { append } from '@writetome51/array-append-prepend';


// Returns all enumerated and inherited properties & methods of obj.

export function getAllPropertiesMethods(obj): string[] {
	let allProperties = Object.getOwnPropertyNames(obj);

	let prototype = Object.getPrototypeOf(obj); // gets own class prototype.
	while (prototype !== (undefined || null)) {
		let methods = Object.getOwnPropertyNames(prototype);
		if (methods) append(methods, allProperties);
		prototype = Object.getPrototypeOf(prototype); // gets parent prototype.
	}
	return getUniqueItems(allProperties);
}
