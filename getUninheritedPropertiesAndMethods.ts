import { append } from '@writetome51/array-append-prepend';


export function getUninheritedPropertiesAndMethods(obj) {
	let propertiesAndMethods = Object.getOwnPropertyNames(obj);
	let objProto = Object.getPrototypeOf(obj);
	let moreProperties = Object.getOwnPropertyNames(objProto);
	append(moreProperties, propertiesAndMethods);
	return propertiesAndMethods;
}
