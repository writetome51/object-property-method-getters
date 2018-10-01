import { getFilteredResults } from 'intuitive-array-handlers/no_modify/get/getFilteredResults';
import { getAllPropertiesMethods } from './getAllPropertiesMethods';


export function _getFunctionsOrNonFunctions(obj, functionsOrNon: 'functions' | 'non'): string[] {
	let propertiesMethods = getAllPropertiesMethods(obj);
	return getFilteredResults((item) => {
		if (functionsOrNon === 'functions') return ((typeof obj[item]) === 'function');
		else return ((typeof obj[item]) !== 'function');
	}, propertiesMethods);
}
