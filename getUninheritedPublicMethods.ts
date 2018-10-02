import { getFilteredResults } from '@writetome51/array-non-modifying-getters-basic/getFilteredResults';
import { getUninheritedMethods } from './getUninheritedMethods';
import { _isPublicName } from './_isPublicName';




export function getUninheritedPublicMethods(obj): string[] {
	let methods = getUninheritedMethods(obj);
	methods = getFilteredResults(_isPublicName, methods);
	return methods;
}
