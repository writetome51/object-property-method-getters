import { appendMany } from 'intuitive-array-handlers/modify/return_void/appendOne_appendMany';


export function getUninheritedPropertiesAndMethods(obj) {
	let propertiesAndMethods = Object.getOwnPropertyNames(obj);
	let objProto = Object.getPrototypeOf(obj);
	let moreProperties = Object.getOwnPropertyNames(objProto);
	appendMany(moreProperties, propertiesAndMethods);
	return propertiesAndMethods;
}
