import { getFilteredResults } from '@writetome51/array-non-modifying-getters-basic/getFilteredResults';
import { getUninheritedMethods } from './getUninheritedMethods';
import { _isPublicName } from './privy/_isPublicName';
// @ts-ignore
let arrayPluck = require('array-pluck');


export function getUninheritedPublicMethods(obj): string[] {
	let methods = getUninheritedMethods(obj);
	let valueIndexPairs = getFilteredResults(_isPublicName, methods);
	return arrayPluck(valueIndexPairs, 'value');
}
