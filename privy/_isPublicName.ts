
// Only way to ferret out private methods/properties here is to make sure all your
// privates begin with an underscore.

export function _isPublicName(name: string):boolean {
	return (name[0] !== '_');
}