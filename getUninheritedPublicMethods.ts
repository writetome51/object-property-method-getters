import { getFilteredResults } from 'intuitive-array-handlers/no_modify/get/getFilteredResults';
import { getUninheritedMethods } from './getUninheritedMethods';


// Only way to ferret out private methods here is to make sure all your private methods
// begin with an underscore.

export function getUninheritedPublicMethods(obj): string[] {
	let methods = getUninheritedMethods(obj);
	methods = getFilteredResults(
		(methodName) => {
			return (methodName[0] !== '_');
		},
		methods
	);
	return methods;
}
