import { getUninheritedPropertiesAndMethods } from './getUninheritedPropertiesAndMethods';
import {appendOne} from 'intuitive-array-handlers/modify/return_void/appendOne_appendMany';


export function getUninheritedProperties(obj){
	let propertiesAndMethods = getUninheritedPropertiesAndMethods(obj);
	let properties = [], i = -1;

	while (++i < propertiesAndMethods.length){
		if (typeof obj[propertiesAndMethods[i]] !== 'function') {
			appendOne(propertiesAndMethods[i], properties);
		}
	}
	return properties;
}