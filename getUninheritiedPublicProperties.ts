import { getUninheritedProperties } from './getUninheritedProperties';
import { getFilteredResults } from '@writetome51/array-non-modifying-getters-basic/getFilteredResults';
import { _isPublicName } from './_isPublicName';


// Only way to ferret out private properties here is to make sure all your private
// properties begin with an underscore.

export function getUninheritedPublicProperties(obj): string[] {
	let properties = getUninheritedProperties(obj);
	properties = getFilteredResults(_isPublicName, properties);
	return properties;
}
