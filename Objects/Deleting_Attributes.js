//property and object properties
function example6() {
	//property attributes
	//writable, enumerable, configurable
	console.log(Object.getOwnPropertyDescriptor({x:1},"x"));

	//object attributes
	//prototype
	var p = {x:1};
	var o = Object.create(p);
	p.isPrototypeOf(o); //true
	Object.prototype.isPrototypeOf(p); //true

	//class
	console.log({x:1}.toString()); //returns [object class]
	function classof(o) {
			if(o==null) return "null";
			if(o==undefined) return "undefined";
			return Object.prototype.toString.call(o).slice(8,-1);

	}

		console.log(classof({})); //returns the class of object

		//extensible
		console.log(Object.isExtensible(Array.prototype)); //true


}