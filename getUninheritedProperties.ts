import { getUninheritedPropertiesAndMethods } from './getUninheritedPropertiesAndMethods';
import { append } from '@writetome51/array-append-prepend/append-prepend';


export function getUninheritedProperties(obj): string[] {
	let propertiesAndMethods = getUninheritedPropertiesAndMethods(obj);
	let properties = [], i = -1;

	while (++i < propertiesAndMethods.length) {
		if (typeof obj[propertiesAndMethods[i]] !== 'function') {
			append([propertiesAndMethods[i]], properties);
		}
	}
	return properties;
}