import { getUninheritedProperties } from './getUninheritedProperties';
import { getFilteredResults } from 'intuitive-array-handlers/no_modify/get/getFilteredResults';


// Only way to ferret out private properties here is to make sure all your private
// properties begin with an underscore.

export function getUninheritedPublicProperties(obj): string[] {
	let properties = getUninheritedProperties(obj);
	properties = getFilteredResults(
		(propertyName) => {
			return (propertyName[0] !== '_');
		},
		properties
	);
	return properties;
}
