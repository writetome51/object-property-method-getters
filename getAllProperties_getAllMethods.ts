import { _getFunctionsOrNonFunctions } from './_getFunctionsOrNonFunctions';


// To be clear, this does not return methods.  For getting methods, use getAllMethods().

export function getAllProperties(obj): string[] {
	return _getFunctionsOrNonFunctions(obj, 'non');
}


export function getAllMethods(obj): string[] {
	return _getFunctionsOrNonFunctions(obj, 'functions');
}
