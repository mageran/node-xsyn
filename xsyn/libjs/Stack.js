/**
 * New node file
 */


var Stack = function() {
	this.elements = [];
};

Stack.prototype.push = function(elem) {
	this.elements = [elem].concat(this.elements);
};

Stack.prototype.pop = function() {
	if (this.elements.length <= 0) {
		throw "*** stack underflow (pop)";
	}
	return this.elements.shift();
};

Stack.prototype.peek = function() {
	if (this.elements.length <= 0) {
		throw "*** stack underflow (peek)";
	}
	return this.elements[0];	
}

module.exports = Stack;