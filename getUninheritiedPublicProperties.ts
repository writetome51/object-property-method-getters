import { getUninheritedProperties } from './getUninheritedProperties';
import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { _isPublicName } from './privy/_isPublicName';
// @ts-ignore
let arrayPluck = require('array-pluck');


// Only way to ferret out private properties here is to make sure all your private
// properties begin with an underscore.

export function getUninheritedPublicProperties(obj): string[] {
	let properties = getUninheritedProperties(obj);
	let valueIndexPairs = getFilteredResults(_isPublicName, properties);
	return arrayPluck(valueIndexPairs, 'value');
}
