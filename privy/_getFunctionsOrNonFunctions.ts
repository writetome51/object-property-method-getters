import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { getAllPropertiesMethods } from '../getAllPropertiesMethods';
// @ts-ignore
let arrayPluck = require('array-pluck');


export function _getFunctionsOrNonFunctions(obj, functionsOrNon: 'functions' | 'non'): string[] {
	let propertiesMethods = getAllPropertiesMethods(obj);
	let valueIndexPairs = getFilteredResults((item) => {
		if (functionsOrNon === 'functions') return ((typeof obj[item]) === 'function');
		else return ((typeof obj[item]) !== 'function');
	}, propertiesMethods);
	return arrayPluck(valueIndexPairs, 'value');
}
